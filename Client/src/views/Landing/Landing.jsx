import style from './Landing.module.css'
import Carousel from '../../components/Carousel/Carousel'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getProducts } from "../../redux/actions";
import { useEffect } from "react";

const Landing = () => {
  const dispatch = useDispatch()


  const categories = useSelector(state => state.categories)
  const order = useSelector(state => state.order)
  const model = useSelector(state => state.model)
  const pagenumber = useSelector(state => state.pagenumber)
  useEffect(() => {
    dispatch(getProducts(categories, order, pagenumber, "6", model));
  }, [model, categories, order, pagenumber]);


  const scroll = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className={style.container}>
      <div className={style.section}>
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
      </div>
    </div>
  )
}

export default Landing;