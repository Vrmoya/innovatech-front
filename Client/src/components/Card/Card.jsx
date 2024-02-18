import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = (props) => {
    const scroll = () => {
        window.scrollTo(0, 0);
      }
    return (
        <Link to={`/detail/${props.id}`} onClick={scroll} className={style.container}>
            <img src={props.image} alt="Product" className={style.img} />

            <div className={style.info}>
                <p className={style.p}>{props.model}</p>
                <button className={style.button}>{`$${props.price} USD`}</button>
            </div>

        </Link>
    )
}

export default Card