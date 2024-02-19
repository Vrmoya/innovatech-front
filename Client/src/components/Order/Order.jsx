import React from 'react'
import style from './Order.module.css'
import { useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions';

const Order = ({category}) => {
  const dispatch = useDispatch()

  const handleFilter = (order) => {
    console.log("Category:", category);
    console.log("Order:", order);
    dispatch(getProducts(category, order));
  };
  return (
    <div className={style.container}>
      <h3 className={style.title}>Sort by</h3>
      <button className={style.button} onClick={() => handleFilter("")}>None</button>
      <button className={style.button} onClick={() => handleFilter("asc")}>Ascending</button>
      <button className={style.button} onClick={() => handleFilter("desc")}>Descending</button>
    </div>

  )
}

export default Order;