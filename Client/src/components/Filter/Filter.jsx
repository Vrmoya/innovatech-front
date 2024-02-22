import React from 'react'
import style from './Filter.module.css'
import { useDispatch } from "react-redux";
import { getCategories } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch()
  

  const handleFilter = (category) => {
    dispatch(getCategories(category))
  };

  return (

    <div className={style.container}>
      <h3 className={style.title}>Collections</h3>
      <button className={style.button} onClick={() => handleFilter("")}>All</button>
      <button className={style.button} onClick={() => handleFilter("tablet")}>Tablets</button>
      <button className={style.button} onClick={() => handleFilter("laptop")}>Laptops</button>
      <button className={style.button} onClick={() => handleFilter("smartphone")}>SmartPhones</button>
      <button className={style.button} onClick={() => handleFilter("headphone")}>Headphones</button>
      <button className={style.button} onClick={() => handleFilter("keyboard")}>Keyboards</button>
    </div>
  )
}

export default Filter;