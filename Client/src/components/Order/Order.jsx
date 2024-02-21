import React from 'react'
import style from './Order.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getOrder } from '../../redux/actions';

const Order = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.categories)

  const handleOrder = (order) => {
    dispatch(getProducts(categories, order));
    dispatch(getOrder(order))
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