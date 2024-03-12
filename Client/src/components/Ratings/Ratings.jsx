import { useSelector } from "react-redux";
import FormRating from "../FormRating/FormRating";
import style from '../Ratings/Ratings.module.css';
import { FcRightDown2 } from "react-icons/fc";
import { useEffect } from "react";


const Rating = () => {
  const rating = useSelector((state) => state.rating);

  useEffect(() => {
  },[rating])

  return (
    <>
    <div className={style.containerRatings}>
      {rating.length === 0 && <p>There are no reviews for this product</p>}
      {rating.length > 1 && <p> Product reviews <FcRightDown2 style={{ fontSize: '20px', verticalAlign: 'text-bottom' }}/></p>}
    </div>
      <div>

      </div>
    </>
  );
};
export default Rating;
