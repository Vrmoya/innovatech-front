import style from './Landing.module.css'
import one from '../../../public/MacBook-Pro-M1.png'
import two from '../../../public/MacBook-Pro-M1-2.png'
import three from '../../../public/MacBook-Pro-M1-3.png'

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.productOne}>
          <img className={style.productsFirst} src={one} alt="" />
          <div className={`${style.info} ${style.firstInfo}`}>
            <p className={style.p}>Product Info</p>
            <button className={style.button}>$20.00 USD</button>
          </div>
        </div>
        <div className={style.leftContent}>
          <div className={style.productTwo}>
            <img className={style.products} src={two} alt="" />
            <div className={style.info}>
              <p className={style.p}>Product Info</p>
              <button className={style.button}>$20.00 USD</button>
            </div>
          </div>
          <div className={style.productThree}>
            <img className={style.products} src={three} alt="" />
            <div className={style.info}>
              <p className={style.p}>Product Info</p>
              <button className={style.button}>$20.00 USD</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;