import style from './Carousel.module.css'
import img from '../../../public/MacBook-Pro-M1.png'

const Carousel = () => {
    return(
        // <div>
        //     Error Page
        // </div>
        <div className={style.slider}>
            <div className={style.slideTrack}>
                {/* 9 SLIDES */}
                <div className={style.slide}>
                    <img className={style.img} src={img} alt="" />
                </div>
                <div className={style.slide}>
                    <img className={style.img} src={img} alt="" />
                </div>
                <div className={style.slide}>
                    <img className={style.img} src={img} alt="" />
                </div>
                <div className={style.slide}>
                    <img className={style.img} src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Carousel;