import { useState } from 'react';
import style from './CardDashboard.module.css'
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { toggleProduct } from '../../redux/actions';

const CardDashboard = (props) => {
    const dispatch = useDispatch()

    const [isActive, setIsActive] = useState(props.isActive);

    const toggleHandler = (id) => {
        if (isActive) {
            swal("Deactivated Product", "Successful operation!", "success");
            dispatch(toggleProduct(id));
            setIsActive(false);
        } else {
            swal("Activated Product", "Successful operation!", "success");
            dispatch(toggleProduct(id));
            setIsActive(true);
        }
    }

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <div className={style.imgContent}>
                    <img src={props.image} alt="Product" className={style.img} />
                </div>
                <div className={style.info}>
                    <p className={style.p}>{props.model}</p>
                    <button className={style.button}>{`$${props.price} USD`}</button>
                </div>
            </div>

            <div className={style.activeContent}>
                {isActive === false ? (
                    <button className={style.enable} onClick={() => toggleHandler(props.id)}>Enable</button>
                ) : (
                    <button className={style.disable} onClick={() => toggleHandler(props.id)}>Disable</button>
                )}

            </div>
        </div>
    )
}

export default CardDashboard;