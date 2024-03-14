import React from 'react';
import style from "./Settings.module.css";
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

const Settings = () => {

  const dispatch= useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    window.location.href = 'http://localhost:5173/';
  };




  return (
    <div className={style.container}>
      <div className={style.option}>
        <div className={style.text}><h3 className={style.h3}>Logout</h3></div>
        <div className={style.contButton}><button className={style.button}
        onClick={handleLogOut}
        >X</button></div>
      </div>

      <div className={style.option}>
      <div className={style.text}><h3 className={style.h3}>Disable</h3></div>
        <div className={style.contButton}><button className={style.button}>❌</button></div>
      </div>

    </div>
  )
}

export default Settings