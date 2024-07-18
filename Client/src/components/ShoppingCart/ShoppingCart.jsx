import style from "../ShoppingCart/ShoppingCart.module.css";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { paymentGateway, showShoppingCart } from '../../redux/actions'
import swal from 'sweetalert';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector(state => state.user)
  const showShoppingCartState = useSelector((state) => state.showShoppingCart);

  const dispatch = useDispatch();
  // useEffect(() => {}, [cart]);

  useEffect(() => { }, [showShoppingCartState]);

  useEffect(() => {
    if (cart) {
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const paymentID = useSelector(state => state.paymentID)

  // initMercadoPago('TEST-473413c2-ccef-459a-967d-2456c1ec2596', {
  initMercadoPago('TEST-2235aec4-88e9-400c-8b49-4153318fb570', {
    locale: "es-AR",
  });

  const handleBuy = () => {
    if (user === null) swal("Login first", "To make a purchase you need to register", "error");
    dispatch(paymentGateway(cart, user.email))
  }

  const notShowShopping = () => {
    dispatch(showShoppingCart(false))
  }

  return (
    <>
      <div className={style.cartContainer}>
        <div className={style.buyCart}>
          <div className={style.firstSection}>
            <p className={style.tittleCart}>My Cart</p>
            <button
              className={style.buttonX}
              onClick={() => notShowShopping()}
            >
              <div className={style.divContainerFirstSection}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className={`${style.icon} ${style.transition} ${style.hover}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <div className={style.secondSection}>
            {cart.length === 0 ? (
              <>
                <div className={style.cartEmpty}>
                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                  </svg>
                  {/* <IoMdCart className={style.iconCart} /> */}
                  <h2>Your cart is empty</h2>
                </div>
              </>
            ) : (
              <>
                <ItemShoppingCart />
                <div className={style.containerTotal}>
                  <div className={style.totalPrice}>
                    <p>Total</p>
                    <span>$ {cart?.reduce((total, product) => total + product.total, 0)},00 USD</span>
                  </div>
                  <hr />
                </div>
                <button className={style.buttonCleanCart} onClick={handleBuy}>
                  Proceed to Checkout
                </button>
                {user !== null && (
                  paymentID && <Wallet initialization={{ preferenceId: paymentID }} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;