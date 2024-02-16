import styles from './Detail.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data'
import { useState } from 'react';

const Detail = () => {
  const { id } = useParams()
  const [productRender, setProductRender] = useState(null);

  useEffect(() => {
    const searchProduct = async () => {
      const filteredProduct = await products?.filter((product) => product.id === Number(id));
      setProductRender(filteredProduct[0]);
    }
    if (id) {
      searchProduct();
    }
    
      }, [id])

  return (
    <>
    <div className='container-fluid contenedor'>
    <div className={styles.detailContainer}>
      {productRender && (
      <>
      <img src={productRender.image} alt={productRender.name} className={styles.productImage} />
      <div className={styles.productInfo}>
              <h1 className={styles.productTittle}>{productRender.model}</h1>
              <p className={styles.productPrice}>{productRender.price} USD</p>
              <hr />
              <p className={styles.productDescription}>{productRender.description}</p>
              <hr />
            <button className={styles.buttonCart}>
                  <i className="bi bi-plus"></i>
                  Add to Cart
                </button>
            </div>
            </> 
      )}
    </div>
    </div>
    </>
  )
};

export default Detail;
