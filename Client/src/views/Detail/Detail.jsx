import styles from "./Detail.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data";
import { useState } from "react";
import CarouselDetail from "../../components/CarouselDetail/CarouselDetail";

const Detail = () => {
  const { id } = useParams();
  const [productRender, setProductRender] = useState(null);

  useEffect(() => {
    const searchProduct = async () => {
      const filteredProduct = await products?.filter(
        (product) => product.id === Number(id)
      );
      setProductRender(filteredProduct[0]);
    };
    if (id) {
      searchProduct()
    }
  }, [id])

  return (
    <>
      <div className="container-fluid contenedor">
        <div className={styles.detailContainer}>
          {productRender && (
            <>
              <img
                src={productRender.image}
                alt={productRender.name}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <h1 className={styles.productTittle}>{productRender.model}</h1>
                <button className={styles.productPrice}>{productRender.price} USD</button>
                <hr />
                <p className={styles.productDescription}>
                  {productRender.description}
                </p>
                <hr />
                <div className="container">
                  <div>
                    <ul className={`${styles.productSpecs} ${styles.circleList}`}>
                      <li>
                        <strong>Processor:</strong> {productRender.processor}
                      </li>
                      <li>
                        <strong>Screen:</strong> {productRender.screen}
                      </li>
                      <li>
                        <strong>Hardcore:</strong> {productRender.hardcore}
                      </li>
                      <li>
                        <strong>Use Type:</strong> {productRender.useType}
                      </li>
                      <li>
                        <strong>RAM:</strong> {productRender.Ram}
                      </li>
                      <li>
                        <strong>Video Card:</strong> 
                        {productRender.videoCard}
                      </li>
                      <li>
                        <strong>Operating System:</strong>{" "}
                        {productRender.operatingSistem}
                      </li>
                      <li>
                        <strong>Dimensions: </strong> 
                        {productRender.dimensions}
                      </li>
                      <li>
                        <strong>Weight: </strong> 
                        {productRender.weight}
                      </li>
                      <li>
                        <strong>Battery Life:</strong>{" "}
                        {productRender.batteryLife}
                      </li>
                      <li>
                        <strong>Connectivity:</strong>{" "}
                        {productRender.connectivity}
                      </li>
                      <li>
                        <strong>Warranty: </strong> 
                        {productRender.warranty}
                      </li>
                    </ul>
                  </div>
                </div>
                <button className={styles.buttonCart}>
                  <i className="bi bi-plus"></i>
                  Add to Cart
                </button>
              </div>
            </>
          )}
        </div>
        <div className={styles.contenedorCarousel}>
        <CarouselDetail />
        </div>
      </div>
    </>
  )
};

export default Detail;
