import { FaStar } from "react-icons/fa";
import { useState } from "react";
import style from "../FormRating/FormRating.module.css";
import { useDispatch } from "react-redux";
import { createRating } from "../../redux/actions.js";

const FormRating = ({ id }) => {
    const dispatch = useDispatch()
  const [rating, setRating] = useState({
    productId: id,
    rating: -1,
    commentary: "",
  }); 
  console.log(rating.rating)
  console.log(rating.commentary)
  console.log(rating.productId)
  const [hover, setHover]= useState(null)


 const handleRating = (ratingValue) => {
    setRating({
        ...rating,
        rating: ratingValue
    })
 }
 const handleChangeCommentary = (event) => {
    //const { value } = event.target;
    setRating({
        ...rating,
        commentary: event.target.value
    })
 }
 const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createRating(rating))
 }
  return (
    <form onSubmit={handleSubmit}>
    <div className={style.container}>
      <h2>Opine sobre el producto</h2>
      <div className={style.containerStars}>
        {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
          return(
            <label key={index}>
              <input 
              className={style.input} 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating({...rating, rating: ratingValue})}/>
              <FaStar 
              key={index} 
              className={style.star} 
              color={ratingValue <= (hover || rating.rating) ? "#ffc107" : "#e4e5e9" } 
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}/>
            </label>
            );
        })}
      </div>
      <div className={style.divTextarea}>
        <textarea 
          className={style.textarea} 
          placeholder="Enter your feedback..."
          onChange={handleChangeCommentary}
        ></textarea>
        <button 
          className={style.buttonSubmit} 
          type="submit" 
          disabled={rating.rating === -1}
        >Submit</button>
      </div>
    </div>
  </form>
  );
};
export default FormRating;
