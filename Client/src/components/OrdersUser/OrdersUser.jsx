import React from 'react'
import { useEffect } from 'react';
import style from "./OrdersUser.module.css";

import { useSelector, useDispatch } from 'react-redux';
import { getUserSolds } from '../../redux/actions';


const OrdersUser = () => {



  const dispatch = useDispatch()


  let user = useSelector(state => state.user)
  const orders = useSelector(state => state.userOrders)

  useEffect(() => {
    dispatch(getUserSolds(user?.id))

  }, [])

  console.log(orders)
  const normalizeCartItems = (orders) => {
    const normalizedItems = [];
    orders.forEach(order => {
      if (order.cartItems) {
        const orderTotal = parseFloat(order.total); 
        order.cartItems.forEach(item => {
          normalizedItems.push({
            orderId: order.id,
            orderDate: order.createdAt, 
            itemName: item.name,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
            total: orderTotal, 
          });
        });
      }
    });
    return normalizedItems;
  };

  const normalizedItems = normalizeCartItems(orders);
  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    
    <div className={style.container}>
      
      <div className={style.miscompras}>
        <h3 className={style.h3}>My Bought Items</h3>
      </div>
      <div className={style.items}>
        <div className={style.item}>Date</div>
        <div className={style.item}>Products</div>
        <div className={style.item}>Order Code Id</div>
        <div className={style.item}>Price</div>
      </div>

      {normalizedItems.map((item, index) => (
  <div key={item.orderId + item.productId} className={style.order}>
    <div className={style.info}>{formatDate(item.orderDate)}</div>
    <div className={style.info}>{item.quantity}/ {item.itemName}</div>
    <div className={style.info}>{item.orderId}</div>
    <div className={style.info}>${item.price}</div>
    
    
   
    
  </div>
))}


    </div>
  );
};
export default OrdersUser