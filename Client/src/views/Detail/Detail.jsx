import styles from "./Detail.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data";
import { useState } from "react";
import CarouselDetail from "../../components/CarouselDetail/CarouselDetail";
import { getProductById } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  console.log(id)
  const [productRender, setProductRender] = useState(null);
  const dispatch = useDispatch()
  const productById = useSelector((state) => state.getProductById)

  useEffect(() => {
    // dispatch(getProductById(id))
    const searchProduct = async () => {
      const filteredProduct = await products?.filter(
        (product) => product.id === Number(id)
      );
      setProductRender(filteredProduct[0]);
    };
    if (id) {
      searchProduct()
    }
  }, [id]) // Agregar productRender como dependencia

  let productoFiltrado;
  if(productRender){
   productoFiltrado = Object.fromEntries(
      Object.entries(productRender).filter(
        ([key, value]) =>
          value !== null &&
          key !== "createdAt" &&
          key !== "updatedAt" &&
          key !== "isActive"
      )
    );
  }

  return (
    <>
    <div className="container-fluid contenedor">
      <div className={styles.detailContainer}>
        {productoFiltrado && (
          <>
            {Object.entries(productoFiltrado).map(([key, value]) => (
              <>
                {key === "image" && (
                  <img src={value} alt="Product Image" className={styles.productImage} />
                )}
                <div className={styles.productInfo}></div>
                {key === "model" && (
                  <h1 className={styles.productTittle}>{value}</h1>
                )}
                {key === "price" && (
                  <button className={styles.productPrice}>{value} USD</button>
                )}
                {key === "description" && (
                  <>
                    <hr />
                    <p className={styles.productDescription}>{value}</p>
                    <hr />
                  </>
                )}
                {key !== "id" && key !== "image" && key !== "model" && key !== "price" && key !== "description" && (
                   <div className="container">
                   <div>
                   <ul className={`${styles.productSpecs} ${styles.circleList}`}>
                  <li className={styles.productSpec}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                  </li>
                  </ul>
                  </div>
                  </div>
                )}
              </>
            ))}
            <hr />
            <button className={styles.buttonCart}>
              <i className="bi bi-plus"></i>
              Add to Cart
            </button>
          </>
        )}
      </div>
      <div className={styles.contenedorCarousel}>
        <CarouselDetail />
      </div>
    </div>
  </>
)}

export default Detail