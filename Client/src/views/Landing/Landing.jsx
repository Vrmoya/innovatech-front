import style from './Landing.module.css'
import Carousel from '../../components/Carousel/Carousel'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

const Home = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  const scroll = () => {
    window.scrollTo(0, 0);
  }

  initMercadoPago('TEST-473413c2-ccef-459a-967d-2456c1ec2596', {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/create_preference", {
        title: "Camiseta",
        price: 500,
        quantity: 1,
        // currency_id: 'ARS'
      })
      console.log(response);
      const { id } = response.data;
      return id
    } catch (error) {
      console.log(error);
    }
  }
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id)
    }
  }

  console.log(preferenceId);

  return (
    <div className={style.container}>
      <button className={style.button} onClick={handleBuy}>Buy</button>
      {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
      {/* <div className={style.section}>
        <Link to={'/detail/29'} className={style.productOne} onClick={scroll}>
          <img className={style.productsFirst} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708216623/Innova%20Tech/b4p4ylte2mebs9yxm1cl.png' alt="" />
          <div className={`${style.info} ${style.firstInfo}`}>
            <p className={style.p}>Microsoft Surface Book 3</p>
            <button className={style.button}>$1.299 USD</button>
          </div>
        </Link>
        <div className={style.leftContent}>
          <Link to={'/detail/2'} className={style.productTwo} onClick={scroll}>
            <img className={style.products} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221294/Innova%20Tech/yqyk120xz88895hrk9yo.png' alt="" />
            <div className={style.info}>
              <p className={style.p}>Samsung Galaxy Tab S7+</p>
              <button className={style.button}>$849 USD</button>
            </div>
          </Link>
          <Link to={'/detail/31'} className={style.productThree} onClick={scroll}>
            <img className={style.products} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708219155/Innova%20Tech/mamtnratpcvr0zcohxjs.png' alt="" />
            <div className={style.info}>
              <p className={style.p}>iPhone 13</p>
              <button className={style.button}>$999 USD</button>
            </div>
          </Link>
        </div>
      </div>
      <div className={style.carouselContent}>
        <Carousel></Carousel>
      </div> */}
    </div>
  )
}

export default Home;