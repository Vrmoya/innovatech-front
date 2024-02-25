import style from "../ShoppingCart/ShoppingCart.module.css";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { IoMdCart } from "react-icons/io";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const cart = useSelector((state) => state.cart);
  // useEffect(() => {}, [cart]);
  useEffect(() => {
    if(cart){
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }
  },[cart])

  return (
    <>
      <div className={style.cartContainer}>
        <div className={style.buyCart}>
          <div className={style.firstSection}>
            <p className={style.tittleCart}>My Cart</p>
            <button
              className={style.buttonX}
              onClick={() => setShowShoppingCart(false)}
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
              <IoMdCart className={style.iconCart} />
              <h2>Your cart is empty</h2>
              </div>
              </>
            ) : (
              <>
                <ItemShoppingCart/>
                <div className={style.containerTotal}>
                  <div className={style.totalPrice}>
                  <p>Total</p>
                  <span> ${cart?.reduce((total, product) => total + product.total, 0).toFixed(2)} USD</span>
                  </div>
                </div>
                <hr />
                <button className={style.buttonCleanCart}>
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
