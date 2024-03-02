import { useState } from 'react';
import style from './CardDashboard.module.css'
import swal from 'sweetalert';

const CardDashboard = (props) => {
    const [enabled, setEnabled] = useState(false)

    const toggleEnabled = () => {
        setEnabled(!enabled);
        if (enabled === false) {
            swal("Producto Desactivado!", "You clicked the button!", "success");
        } else{
            swal("Producto Activado!", "You clicked the button!", "success");
        }
    }

    return (
        <div className={style.container}>
            <div className={style.imgContent}>
                <img src={props.image} alt="Product" className={style.img} />
            </div>
            <div className={style.info}>
                <p className={style.p}>{props.model}</p>
                <button className={style.button}>{`$${props.price} USD`}</button>
                {enabled ?
                    <button className={style.enable} onClick={toggleEnabled}>Enable</button> :
                    <button className={style.disable} onClick={toggleEnabled}>Disable</button>

                }
            </div>
        </div>
    )
}

export default CardDashboard;