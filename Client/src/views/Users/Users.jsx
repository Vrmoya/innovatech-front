import React from 'react'
import style from "./Users.module.css";
import UsersForm from '../../components/UsersForm/UsersForm';
import {  useSelector } from 'react-redux';


const Users = () => {
  const user = useSelector(state => state.user)
  console.log("Datos del usuario:",  user);

  return (
    <div className={style.containerView}>
      {user && user.image && <img className={style.image} src={user.image} alt="User Image" />}
      
    <UsersForm/>
  
    </div>
  )
}

export default Users