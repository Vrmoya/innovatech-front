import style from './Carousel.module.css'
import { Link } from 'react-router-dom'

const Carousel = () => {

    const scroll = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className={style.slider}>
            <Link to={'/detail/17'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708216548/Innova%20Tech/m95tjzxlru9ujxtxyope.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Dell XPS 13</p>
                    <button className={style.button}>$1.299 USD</button>
                </div>
            </Link>
            <Link to={'/detail/1'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221045/Innova%20Tech/wjcvklxkirwpla1llq8z.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>iPad Pro</p>
                    <button className={style.button}>$1099 USD</button>
                </div>
            </Link>
            <Link to={'/detail/46'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708274515/Innova%20Tech/x3nbpzqmmo8adlbvthmh.svg' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Jabra Elite 85t</p>
                    <button className={style.button}>$229.99 USD</button>
                </div>
            </Link>
            <Link to={'/detail/58'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708276806/Innova%20Tech/auqpjvkknhpiho4lkfaz.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Logitech G915</p>
                    <button className={style.button}>$249.99 USD</button>
                </div>
            </Link>
            

            <Link to={'/detail/17'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708216548/Innova%20Tech/m95tjzxlru9ujxtxyope.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Dell XPS 13</p>
                    <button className={style.button}>$1.299 USD</button>
                </div>
            </Link>
            <Link to={'/detail/1'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221045/Innova%20Tech/wjcvklxkirwpla1llq8z.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>iPad Pro</p>
                    <button className={style.button}>$1099 USD</button>
                </div>
            </Link>
            <Link to={'/detail/46'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708274515/Innova%20Tech/x3nbpzqmmo8adlbvthmh.svg' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Jabra Elite 85t</p>
                    <button className={style.button}>$229.99 USD</button>
                </div>
            </Link>
            <Link to={'/detail/58'} className={style.slide} onClick={scroll}>
                <img className={style.img} src='https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708276806/Innova%20Tech/auqpjvkknhpiho4lkfaz.png' alt="" />
                <div className={style.info}>
                    <p className={style.p}>Logitech G915</p>
                    <button className={style.button}>$249.99 USD</button>
                </div>
            </Link>
        </div>
    )
}

export default Carousel;