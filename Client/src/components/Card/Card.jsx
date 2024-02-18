import style from './Card.module.css'

const Card = (props) => {
    return (
        <div className={style.container}>
            <img src={props.image} alt="Product" className={style.img} />

            <div className={style.info}>
                <p className={style.p}>{props.model}</p>
                <button className={style.button}>{`$${props.price} USD`}</button>
            </div>

        </div>
    )
}

export default Card