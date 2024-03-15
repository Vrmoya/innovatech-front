import style from "../FormRating/FormRating.module.css";
/* Importacion de iconos */
import { FaStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
/* Hooks */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
/* Importacion action */
import { createRating, cleanRatings } from "../../redux/actions.js";

const FormRating = ({ id }) => {
  const dispatch = useDispatch();
  const ratingMessageApprove = useSelector((state) => state.ratingMessageApprove);
  const ratingMessageError = useSelector((state) => state.ratingMessageError);
  const userLogueado = useSelector((state) => state.user) 

  const [rating, setRating] = useState({
    productId: id,
    rating: -1,
    commentary: "",
  });
  const [hover, setHover] = useState(null);

  useEffect(() => {
  },[ratingMessageApprove, ratingMessageError])

  const handleRating = (ratingValue) => {
    setRating({
      ...rating,
      rating: ratingValue,
    });
  };
  const handleChangeCommentary = (event) => {
    setRating({
      ...rating,
      commentary: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createRating(rating, userLogueado));
    setRating({
        productId: id,
        rating: -1,
        commentary: "",
      })
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={style.container}>
        <div className={style.containerStars}>
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <label key={index}>
                <input
                  className={style.input}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating({ ...rating, rating: ratingValue })}
                />
                <FaStar
                  key={index}
                  className={style.star}
                  style={{ fontSize: '22px'}}
                  color={
                    ratingValue <= (hover || rating.rating)
                      ? "#ffc107"
                      : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        <div className={style.divTextarea}>
          <textarea
            className={style.textarea}
            placeholder="Enter your feedback this product..."
            onChange={handleChangeCommentary}
            value={rating.commentary}
          ></textarea>
          <button
            className={style.buttonSubmit}
            type="submit"
            disabled={rating.rating === -1}
          >
            Submit
          </button>
        </div>
      </div>
      <div className={style.containerMessage}>
      {ratingMessageApprove && <p style={{ color: 'rgb(139, 195, 74)' }}>{ratingMessageApprove} <FcApproval style={{ fontSize: '25px', verticalAlign: 'text-bottom' }}/></p>}
      {ratingMessageError && <p style={{ color: 'red' }}>{ratingMessageError} <FcCancel style={{ fontSize: '25px', verticalAlign: 'text-bottom' }} /></p>}
      </div>
    </form>
  );
};
export default FormRating;
