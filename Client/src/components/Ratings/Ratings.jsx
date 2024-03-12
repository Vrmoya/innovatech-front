import { useSelector } from "react-redux";
import FormRating from "../FormRating/FormRating";
import style from '../Ratings/Ratings.module.css';

const Rating = () => {
  const rating = useSelector((state) => state.rating);

  return (
    <>
    <div className={style.containerRatings}>
      {rating.length === 0 && <p>There are no reviews for this product</p>}
    </div>
      <div></div>
    </>
  );
};
export default Rating;
