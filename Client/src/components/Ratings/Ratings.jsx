import style from '../Ratings/Ratings.module.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
/* Importacion de iconos */
import { FcRightDown2 } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { PiSmileySadLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

const Rating = () => {
  const ratings = useSelector((state) => state.rating);

  useEffect(() => {
  },[ratings])

  return (
    <>
      <div className={style.containerRatings}>
        <div>
          {ratings.length === 0 && <p>There are no reviews for this product <PiSmileySadLight style={{ fontSize: '22px', verticalAlign: 'text-bottom' }}/></p>}
          {ratings.length !== 0 && <h3 > Product reviews <FcRightDown2 style={{ fontSize: '20px', verticalAlign: 'text-bottom' }}/></h3>}
        </div>
        <div className={style.boxContainerRating}>
          {ratings && (
            ratings.reverse().map((rating) => (
              <div className={style.boxRating}>
                <div className={style.ratingInfo}>
                  <div className={style.userInfo}>
                    <VscAccount  style={{ fontSize: '30px'}}/>
                    <p>{rating.commentary}</p>
                  </div>
                  <div className={style.containerStars}>
                    {[...Array(5)].map((star, index) => (
                      <label key={index}>
                        <input
                          className={style.input}
                          type="radio"
                          name="rating"
                        />
                        <FaStar
                          key={index}
                          className={style.star}
                          style={{ fontSize: '22px'}}
                          color={
                            index < rating.rating
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )}
export default Rating;
