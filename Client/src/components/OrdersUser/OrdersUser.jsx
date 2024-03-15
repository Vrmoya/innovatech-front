import React from 'react'
import { useEffect } from 'react';
import style from "./OrdersUser.module.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

const OrdersUser = () => {
  
 

  let user = useSelector(state => state.user)
  console.log("vamos con esas compras", user);

  
console.log("Este es el userId:", user.id)


const sendGetRequest = async () => {
  try {
    const response = await axios.get(`http://localhost:80/cart/${user.id}`);
    handleResponse(response.data); // Llamar a la función handleResponse con la data de la respuesta
  } catch (error) {
    console.error('Error al obtener el historial de compras:', error);
  }
};


const handleResponse = (response) => {
  if (response === undefined) {
    
    return;
  }

  if (response.length === 0) {
    alert('El historial de compras está vacío.');
  } else {
    console.log('Historial de compras:', response);
  }
};

sendGetRequest()
handleResponse()







  return (
    <div className={style.container}>
      <div className={style.info}><h3>{user.name}</h3></div>
      <div className={style.miscompras}>
        <h3 className={style.h3}>My Orders</h3>
      </div>
      <div className={style.items}>
        <div className={style.item}>Date</div>
        <div className={style.item}>Products</div>
        <div className={style.item}>Order Code</div>
        <div className={style.item}>Total</div>
      </div>
      <div className={style.order}>
      <div className={style.info}>22/02/2024</div>
        <div className={style.info}>Iphone 13</div>
        <div className={style.info}>ZXt765678879NZ</div>
        <div className={style.info}>$1999</div>
      </div>
      <div className={style.order}>
      <div className={style.info}>15/10/2023</div>
        <div className={style.info}>Samsung s23</div>
        <div className={style.info}>WXt76586878NZ</div>
        <div className={style.info}>$1200</div>
      </div>

      
      </div>
  )
}

export default OrdersUser