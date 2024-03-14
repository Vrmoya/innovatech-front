import React from 'react'
import style from "./OrdersUser.module.css";
import axios from 'axios';
import { useSelector } from 'react-redux';

const OrdersUser = () => {


  const user = useSelector(state => state.user)
  console.log("Data:", user);


// Supongamos que "userId" contiene el ID del usuario para el que deseas obtener el historial de compras
const userId = '123';

// Realizar la solicitud GET a la ruta proporcionando el ID del usuario como parte de la URL

// axios.get(`http://localhost:80/getCartById/${userId}`)
//   .then(response => {
//     // Manejar la respuesta del servidor aquí
//     const historialDeCompras = response.data;
//     console.log(historialDeCompras);
//   })
//   .catch(error => {
//     // Manejar errores en caso de que la solicitud falle
//     console.error('Error al obtener el historial de compras:', error);
//   });



  return (
    <div className={style.container}>
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