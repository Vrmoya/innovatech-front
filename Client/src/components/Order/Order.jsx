import React, { useState } from 'react';
import style from './Order.module.css';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../redux/actions';

const Order = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOrder = (order) => {
    dispatch(getOrder(order));
    setSelectedOption(order);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Sort by</h3>
      <button
        className={`${style.button} ${selectedOption === '' ? style.selected : ''}`}
        onClick={() => handleOrder('')}
      >
        None
      </button>
      <button
        className={`${style.button} ${selectedOption === 'asc' ? style.selected : ''}`}
        onClick={() => handleOrder('asc')}
      >
        Price: Low to high
      </button>
      <button
        className={`${style.button} ${selectedOption === 'desc' ? style.selected : ''}`}
        onClick={() => handleOrder('desc')}
      >
        Price: High to low
      </button>
    </div>
  );
};

export default Order;



