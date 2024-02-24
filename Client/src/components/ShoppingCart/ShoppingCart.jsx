import style from "../ShoppingCart/ShoppingCart.module.css";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  const cart = useSelector((state) => state.cart);
  useEffect(() => {}, [cart]);

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
              <h2>Cart is empty</h2>
            ) : (
              <>
                <ItemShoppingCart />
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
