import React, { useState } from 'react';
import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilter = (category) => {
    dispatch(getCategories(category));
    setSelectedCategory(category);
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Collections</h3>
      <button
        className={`${style.button} ${selectedCategory === '' ? style.selected : ''}`}
        onClick={() => handleFilter('')}
      >
        All
      </button>
      <button
        className={`${style.button} ${selectedCategory === 'tablet' ? style.selected : ''}`}
        onClick={() => handleFilter('tablet')}
      >
        Tablets
      </button>
      <button
        className={`${style.button} ${selectedCategory === 'laptop' ? style.selected : ''}`}
        onClick={() => handleFilter('laptop')}
      >
        Laptops
      </button>
      <button
        className={`${style.button} ${selectedCategory === 'smartphone' ? style.selected : ''}`}
        onClick={() => handleFilter('smartphone')}
      >
        SmartPhones
      </button>
      <button
        className={`${style.button} ${selectedCategory === 'headphone' ? style.selected : ''}`}
        onClick={() => handleFilter('headphone')}
      >
        Headphones
      </button>
      <button
        className={`${style.button} ${selectedCategory === 'keyboard' ? style.selected : ''}`}
        onClick={() => handleFilter('keyboard')}
      >
        Keyboards
      </button>
    </div>
  );
};

export default Filter;

