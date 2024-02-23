import style from "../ShoppingCart/ShoppingCart.module.css";

const ShoppingCart = ({ showShoppingCart, setShowShoppingCart }) => {
  return (
    <>
      <div className={style.cartContainer}>
        <div className={style.buyCart}>
          <div className={style.firstSection}>
            <p>My Cart</p>
            <button className={style.buttonX}>
              <div className={style.divContainerFirstSection}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className={`${style.icon} ${style.transition} ${style.hover}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
          <button className={style.buttonCleanCart}>Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
{
  /* <ul className={style.navCard}>
<li>Image</li>
<li>Name</li>
<li>Price</li>
<li>Cantidad</li>
</ul> */
}
