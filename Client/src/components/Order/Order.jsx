import React from 'react'
import style from './Order.module.css'
import { useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions';

const Order = ({category}) => {
  const dispatch = useDispatch()

  const handleOrder = (order) => {
    // console.log("Order:", order);
    dispatch(getProducts(category, order));
  };
  return (
    <div className={style.container}>
      <h3 className={style.title}>Sort by</h3>
      <button className={style.button} onClick={() => handleOrder("")}>None</button>
      <button className={style.button} onClick={() => handleOrder("asc")}>Price: Low to high</button>
      <button className={style.button} onClick={() => handleOrder("desc")}>Price: High to low</button>
    </div>

  )
}

export default Order;