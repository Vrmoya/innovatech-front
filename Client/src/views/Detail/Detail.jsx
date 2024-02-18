// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data";
import { useState } from "react";
import CarouselDetail from "../../components/CarouselDetail/CarouselDetail";
import { getProductById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [productRender, setProductRender] = useState(null);
  const dispatch = useDispatch();
  const productById = useSelector((state) => state.getProductById);

  useEffect(() => {
    // dispatch(getProductById(id))
    const searchProduct = async () => {
      const filteredProduct = await products?.filter(
        (product) => product.id === Number(id)
      );
      setProductRender(filteredProduct[0]);
    };
    if (id) {
      searchProduct();
    }
  }, []); // Agregar productRender como dependencia

  let productoFiltrado;
  if (productRender) {
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
  console.log(productoFiltrado);

  return (
    <>
      {productoFiltrado && (
        <div className="contenedor">
          <div className={styles.detailContainer}>
            <img
              src={productoFiltrado.image}
              alt={productoFiltrado.model}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <h1 className={styles.productTittle}>{productoFiltrado.model}</h1>
              <button className={styles.productPrice}>
                ${productoFiltrado.price} USD
              </button>
              <hr />
              <p className={styles.productDescription}>
                {productoFiltrado.description}
              </p>
              <hr />
              <div className="container">
                <div>
                <ul className={`${styles.productSpecs} ${styles.circleList}`}>
                  {Object.entries(productoFiltrado).map(
                    ([key, value]) =>
                      key !== "id" &&
                      key !== "image" &&
                      key !== "model" &&
                      key !== "price" &&
                      key !== "description" && (
                        <li className={styles.productSpec} key={key}>
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {value}
                        </li>
                      )
                  )}
                </ul>
                </div>
              </div>
              <button className={styles.buttonCart}>
                      <i className="bi bi-plus"></i>
                      Add to Cart
                    </button>
            </div>
          </div>
          <div>
            <CarouselDetail />
            </div>
        </div>
      )}
    </>
  );
};

export default Detail;
