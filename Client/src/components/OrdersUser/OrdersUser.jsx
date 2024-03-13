import React from 'react'
import style from "./OrdersUser.module.css";

const OrdersUser = () => {
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