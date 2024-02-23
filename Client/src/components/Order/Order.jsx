import React, { useState } from 'react'
import style from './Order.module.css'
import { useDispatch } from "react-redux";
import { getOrder } from '../../redux/actions';

const Order = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState("")

  const handleOrder = (order) => {
    setSelected(order)
    dispatch(getOrder(order))
  };

  const orderMobile = (category) => {
    dispatch(getOrder(category.target.value))
  }

  return (
    <div className={style.container}>
      <div className={style.desktopContent}>
        <h3 className={style.title}>Sort by</h3>
        <button className={`${style.button} ${selected === '' && style.selected}`} onClick={() => handleOrder("")}>None</button>
        <button className={`${style.button} ${selected === 'asc' && style.selected}`} onClick={() => handleOrder("asc")}>Price: Low to high</button>
        <button className={`${style.button} ${selected === 'desc' && style.selected}`} onClick={() => handleOrder("desc")}>Price: High to low</button>
      </div>

      <div className={style.mobileContent}>
        <select name="" id="" className={style.select} onChange={orderMobile}>
          <option value="">None</option>
          <option value="asc">Price: Low to high</option>
          <option value="desc">Price: High to low</option>
        </select>
      </div>

    </div>
  );
};

export default Order;



