// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import CarouselDetail from "../../components/CarouselDetail/CarouselDetail";
import { getProductById, cleanProductById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CarouselDetailImages from "../../components/CarouselDetailImages/CarouselDetailImages";
import { PiPlusBold } from "react-icons/pi";

const Detail = () => {
  const { id } = useParams();
  const [images, setImages] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const dispatch = useDispatch();
  const productById = useSelector((state) => state.getProductById);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductById(id));

    return () => {
      dispatch(cleanProductById());
    };
  }, [id]);

  let productoFiltrado;
  if (productById) {
    productoFiltrado = Object.fromEntries(
      Object.entries(productById).filter(
        ([key, value]) =>
          value !== null &&
          key !== "createdAt" &&
          key !== "updatedAt" &&
          key !== "isActive"
      )
    );
  }

  useEffect(() => {
    if (productById && productById.image && Array.isArray(productById.image)) {
      const imagenes = productById.image;
      const data = imagenes.map((img) => ({
        original: img,
        thumbnail: img,
      }));
      if (data.length > 0) {
        console.log(productById);
        setImages(data);
      }
    }
  }, [productById]);

  useEffect(() => {
    if (
      productById &&
      Array.isArray(productById.categories) &&
      productById.categories.length > 0
    ) {
      const category = productById.categories[0].name;
      console.log(productById);
      //   const productsFiltered = products.filter((product) => product.categories[0].name === category)
      //   if(productsFiltered.length > 0){
      //     console.log(productsFiltered)
      //     setRelatedProducts(productsFiltered)
      // }
    }
  }, [productById]);

  return (
    <>
      {productoFiltrado && images && (
        <div className={styles.contenedor}>
          <div className={styles.detailContainer}>
            <div className={styles.contenedorGallery}>
              <CarouselDetailImages images={images} />
            </div>
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
              <div className={styles.containerSpecs}>
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
              <div className={styles.divButtonCart}>
                <button className={styles.buttonCart}>
                    <PiPlusBold  className={styles.iconPlus}/>
                  Add To Cart
                </button>
              </div>
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