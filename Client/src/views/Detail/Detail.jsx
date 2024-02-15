import styles from './Detail.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data'
import imageIpad from '../../assets/ipad-dorso-anverso.svg'

const Detail = () => {
  const product = {
    category: "tablet",
    model: "iPad Pro",
    processor: "Apple M1",
    screen: "12.9 inches",
    hardcore: "256GB",
    "use-type": "Tablet",
    Ram: "8GB",
    "video-card": "Apple M1",
    price: "$1099",
    "operating-sistem": "iPadOS",
    dimensions: "28.06 x 21.49 x 0.59 cm",
    weight: "682 grams",
    "battery-life": "Up to 10 hours",
    connectivity: "Wi-Fi, Bluetooth",
    warranty: "12 months",
    description: "The iPad Pro offers a seamless user experience with its sleek design and intuitive interface. Its large 12.9-inch display provides vibrant visuals, while the powerful M1 processor ensures smooth performance for all tasks. With up to 10 hours of battery life, it's perfect for work or entertainment on the go.",
    image: imageIpad
  };

  return (
    <>
    <div className='container-fluid contenedor'>
    <div className={styles.detailContainer}>
      <img src={imageIpad} alt={product.name} className={styles.productImage} />
     
      <div className={styles.productInfo}> 
      <h1 className={styles.productTittle}>{product.model}</h1>
      <p className={styles.productPrice}>{product.price}</p>
      <hr />
      <p className={styles.productDescription}>{product.description}</p>
      <button className={styles.buttonCart}>Add to Cart</button>
        </div> 
    </div>
    
    </div>
    </>
  )
};

export default Detail;
