import React from 'react'
import style from "./Users.module.css";
import UsersForm from '../../components/UsersForm/UsersForm';


const Users = () => {
  return (
    <div className={style.containerView}>
    <UsersForm/>
  
    </div>
  )
}

export default Users