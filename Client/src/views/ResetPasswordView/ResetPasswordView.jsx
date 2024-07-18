import React from 'react'
import style from "./ResetPasswordView.module.css";
import ResetPassword from '../../components/ResetPassword/ResetPassword';
import { Link } from 'react-router-dom';



const ResetPasswordView = () => {
  return (
    <div className={style.container}>
      <Link className={style.link} to={'/login'}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
        Back
      </Link>
      <ResetPassword></ResetPassword>
    </div>
  )
}

export default ResetPasswordView