import React from 'react'
import style from './Filter.module.css'
import { useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch()

  const handleFilter = (category) => {
    console.log("Category:", category);
    if(category === ""){
      dispatch(getProducts(category, '', '', ''))
    } else{
      dispatch(getProducts(category, '', '', ''));
    }
  };
  
  return (

    <div className={style.container}>
      <h3 className={style.title}>Collections</h3>
      <button className={style.button} onClick={() => handleFilter("")}>All</button>
      <button className={style.button} onClick={() => handleFilter("tablet")}>Tablet</button>
      <button className={style.button} onClick={() => handleFilter("laptop")}>Laptop</button>
      <button className={style.button} onClick={() => handleFilter("smartphone")}>SmartPhone</button>
      <button className={style.button} onClick={() => handleFilter("headphone")}>Headphone</button>
      <button className={style.button} onClick={() => handleFilter("keyboard")}>Keyboard</button>
    </div>
  )
}

export default Filter;