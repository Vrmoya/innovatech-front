import React from 'react'
import style from "./ResetPasswordView.module.css";
import ResetPassword from '../../components/ResetPassword/ResetPassword';



const ResetPasswordView = () => {
  return (
    <div className={style.container}><ResetPassword></ResetPassword>
    </div>
  )
}

export default ResetPasswordView