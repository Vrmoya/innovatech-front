import { FaStar } from "react-icons/fa";
import { useState } from "react";
import style from "../FormRating/FormRating.module.css";

const FormRating = ({ id }) => {
  const [rating, setRating] = useState({
    productId: id,
    rating: null,
    commentary: "",
  }); 
  const [hover, setHover]= useState(null)

  //const stars = Array(5).fill(0);
 const handleRating = (ratingValue) => {
    setRating({
        ...rating,
        rating: ratingValue
    })
 }
  return (
    <div className={style.container}>
      <h2>Opine sobre el producto</h2>
      <div>
        {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1
          return(
            <label>
              <input 
              className={style.input} 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => setRating({...rating, rating: ratingValue})}
              onMouseOver={() => setHover(ratingValue)}/>
              <FaStar key={index} className={style.star} color={ratingValue <= rating.rating ? "#ffc107" : "#e4e5e9" } />
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default FormRating;
