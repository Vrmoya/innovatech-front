import style from './Landing.module.css'
import Carousel from '../../components/Carousel/Carousel'
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions'

const Home = () => {

  const products = useSelector(state => state.products)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.productOne}>
          <img className={style.productsFirst} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708216548/Innova%20Tech/m95tjzxlru9ujxtxyope.png' alt="" />
          <div className={`${style.info} ${style.firstInfo}`}>
            <p className={style.p}>Dell XPS 13</p>
            <button className={style.button}>$1.299 USD</button>
          </div>
        </div>
        <div className={style.leftContent}>
          <div className={style.productTwo}>
            <img className={style.products} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221294/Innova%20Tech/yqyk120xz88895hrk9yo.png' alt="" />
            <div className={style.info}>
              <p className={style.p}>Samsung Galaxy Tab S7+</p>
              <button className={style.button}>$849 USD</button>
            </div>
          </div>
          <div className={style.productThree}>
            <img className={style.products} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708219183/Innova%20Tech/pstcipcufa2onsnrrlqs.png' alt="" />
            <div className={style.info}>
              <p className={style.p}>iPhone 13</p>
              <button className={style.button}>$999 USD</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.carouselContent}>
        <Carousel></Carousel>
      </div>
    </div>
  )
}

export default Home;