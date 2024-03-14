import styles from "./Detail.module.css";
import { useEffect } from "react";
import { Form, useParams } from "react-router-dom";
import { useState } from "react";
import CarouselDetail from "../../components/CarouselDetail/CarouselDetail";
import {
  getProductById,
  cleanProductById,
  addToCart,
  getRating,
  cleanRatings
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CarouselDetailImages from "../../components/CarouselDetailImages/CarouselDetailImages";
import { PiPlusBold } from "react-icons/pi";
import {getProducts, showShoppingCart } from "../../redux/actions";
import FormRating from '../../components/FormRating/FormRating';
import Ratings from "../../components/Ratings/Ratings";

const Detail = () => {
  const { id } = useParams();
  const [images, setImages] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();
  const productById = useSelector((state) => state.getProductById);
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart)

  const categories = useSelector(state => state.categories)
    const order = useSelector(state => state.order)
    const model = useSelector(state => state.model)
    const pagenumber = useSelector(state=> state.pagenumber)
    useEffect(() => {
        dispatch(getProducts(categories, order, pagenumber, "6",model));
        dispatch(getRating(id))
      }, [model,categories,order,pagenumber]);

  useEffect(() => {
    dispatch(getProductById(id));

    return () => {
      dispatch(cleanProductById());
      dispatch(cleanRatings())
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
        setImages(data);
      }
    }
  }, [productById]);

  // useEffect(() => {
  //   if (
  //     productById &&
  //     Array.isArray(productById.categories) &&
  //     productById.categories.length > 0
  //   ) {
  //     const category = productById.categories[0].name;
  //     console.log(productById);
  //     //   const productsFiltered = products.filter((product) => product.categories[0].name === category)
  //     //   if(productsFiltered.length > 0){
  //     //     console.log(productsFiltered)
  //     //     setRelatedProducts(productsFiltered)
  //     // }
  //   }
  // }, [productById]);

  const handleAddToCart = () => {
    if (productById && productById.id) {
      dispatch(addToCart(productById.id));
      dispatch(showShoppingCart(true))
    }
  };
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                ${productoFiltrado.price}.00 USD
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
              <div className={styles.divButtonCart} onClick={scroll}>
                <button className={styles.buttonCart} onClick={handleAddToCart}>
                  <PiPlusBold className={styles.iconPlus} />
                  Add To Cart
                </button>
                {showCart && <ShoppingCart />}
              </div>
            </div>
          </div>
          <div className={styles.containerRating} >
            <FormRating id={id}/>
          <hr />
          </div>
          <div>
            <Ratings />          
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