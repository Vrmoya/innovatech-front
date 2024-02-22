import style from '../ShoppingCart/ShoppingCart.module.css';

const ShoppingCart = () => {
  return (
    <>
     <div className={style.cartContainer}>
      <div className={style.buyCart}>
        <ul className={style.navCard}>
          <li>Image</li>
          <li>Name</li>
          <li>Price</li>
          <li>Cantidad</li>
        </ul>
        <button className={style.buttonCleanCart}>Vaciar carrito</button>
      </div>
     </div>
    </>
  );
};
export default ShoppingCart;
