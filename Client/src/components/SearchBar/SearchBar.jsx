import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByModel, getProducts } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [model, setModel] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories)
  const order = useSelector(state => state.order)

  const handleChange = (event) => {
    event.preventDefault();
    setModel(event.target.value);
  };

  const handleClear = () => {
    // Limpiar el estado del modelo y obtener todos los productos
    setModel("");
    dispatch({ type: 'CHANGE_MODEL', payload: "" });
    dispatch(getProducts(categories, order));
  };

  const handleSubmit = () => {
    dispatch({ type: 'CHANGE_MODEL', payload: model });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
      navigate('/home');
    }
  };

  return (
    <div className={style.group}>
      <svg className={style.icon} onClick={handleSubmit} aria-hidden="true" viewBox="0 0 24 24">
        <g>
          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
      </svg>
      <input
        className={style.input}
        placeholder="Search for products..."
        value={model}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
     
      {model && (
        <button className={style.clearButton} onClick={handleClear}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
      )}
      </div>
    
  );
};

export default SearchBar;

