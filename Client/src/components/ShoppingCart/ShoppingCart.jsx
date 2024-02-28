import style from "../ShoppingCart/ShoppingCart.module.css";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { paymentGateway, showShoppingCart } from "../../redux/actions";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const showShoppingCartState = useSelector((state) => state.showShoppingCart);

  const dispatch = useDispatch();
  useEffect(() => {}, [showShoppingCartState]);
  useEffect(() => {
    if (cart) {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const paymentID = useSelector((state) => state.paymentID);

  initMercadoPago("TEST-473413c2-ccef-459a-967d-2456c1ec2596", {
    locale: "es-AR",
  });

  const handleBuy = () => {
    dispatch(paymentGateway(cart));
  };
  const notShowShopping = () => {
    dispatch(showShoppingCart(false));
  };

  return (
    <>
      <div className={style.cartContainer}>
        <div className={style.buyCart}>
          <div className={style.firstSection}>
            <p className={style.tittleCart}>My Cart</p>
            <button className={style.buttonX} onClick={notShowShopping}>
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
                  <IoMdCart className={style.iconCart} />
                  <h2>Your cart is empty</h2>
                </div>
              </>
            ) : (
              <>
                <ItemShoppingCart />
                <div className={style.containerTotal}>
                  <div className={style.totalPrice}>
                    <p>Total</p>
                    <span>
                      ${" "}
                      {cart?.reduce(
                        (total, product) => total + product.total,
                        0
                      )}
                      ,00 USD
                    </span>
                  </div>
                  <hr />
                </div>
                <button className={style.buttonCleanCart} onClick={handleBuy}>
                  Proceed to Checkout
                </button>
                {paymentID && (
                  <Wallet initialization={{ preferenceId: paymentID }} />
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
