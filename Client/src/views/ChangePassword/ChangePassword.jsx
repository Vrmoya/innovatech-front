import React from 'react'
import style from './ChangePassword.module.css';
import ChangePasswordComponent from '../../components/ChangePassword/ChangePassword';

const ChangePassword = () => {
  return (
    <div className={style.container}>
        <ChangePasswordComponent></ChangePasswordComponent>

    </div>
  )
}

export default ChangePassword