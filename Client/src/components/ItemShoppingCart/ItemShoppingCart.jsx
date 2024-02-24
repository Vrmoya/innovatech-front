import { useSelector } from "react-redux";
import style from "../ItemShoppingCart/ItemShoppingCart.module.css";
import imageIpad from "../../assets/ipad-dorso-anverso.svg";
import imageSamsung from "../../assets/tablet-samsung-anverso-dorso.svg";
import { useEffect } from "react";

const ItemShoppingCart = () => {
  const itemProduct = useSelector((state) => state.cart)
  useEffect(() => {

  },[itemProduct])

  return (
    <>
      <div className={style.containerItem}>
        <ul className={style.listUL}>
          {itemProduct?.map((product,index) => (
            <>
              <li key={index}className={style.listLi}>
                <div className={style.divProduct}>
                  <div>
                    <div>
                      <button className={style.removeProduct}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={style.divImageProduct}>
                    <img className={style.imgProduct} src={product.image[0]} alt="" />
                  </div>
                  <div className={style.detailProduct}>
                    <span>{product.model}</span>
                  </div>
                  <div className={style.priceProduct}>
                    <p>{product.price},00USD</p>
                    <div className={style.divCounterProduct}>
                      <div>
                        <button className={style.buttonNegative}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className={style.iconNegative}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 12h-15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <p className={style.counterProduct}>
                        <span>1</span>
                      </p>
                      <div>
                        <button className={style.buttonPlus}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className={style.iconPlus}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ItemShoppingCart;
