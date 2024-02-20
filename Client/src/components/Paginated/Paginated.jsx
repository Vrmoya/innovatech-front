import style from './Paginated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions';
import { useEffect, useState } from 'react';

const Paginated = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const order = useSelector(state => state.order)
    const products = useSelector((state) => state.products)
    const [disableButtonNext, setdisableButtonNext] = useState(false)

    const [input, setInput] = useState("1")

    const handlePaginated = (event) => {
        const value = event.target.value;

        setInput(value)
        dispatch(getProducts(categories, order, value))
    }
    useEffect(() => {
        if(products.length < 6){
            setdisableButtonNext(true)
        }
    },[products])


    const prev = () => {
        scroll()
        const prevValue = parseInt(input) - 1;
        if (prevValue > 0) {
            setInput(prevValue.toString());
            dispatch(getProducts(categories, order, prevValue.toString())); // Aquí pasamos las categorías y el orden actuales
        } else {
            setInput("-1");
        }
    };

    const next = () => {
        scroll()
        const nextValue = parseInt(input) + 1;
        setInput(nextValue.toString());
        dispatch(getProducts(categories, order, nextValue.toString())); // Aquí pasamos las categorías y el orden actuales
    };

    const scroll = () => {
        window.scrollTo(0, 0);
      }

    return (
        <div className={style.container}>
            <button className={style.button} onClick={prev} disabled={parseInt(input) === 1}>
                <svg className={style.svgPrev} viewBox="0 0 384 512">
                    <path className={style.path}
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
            <input
                onChange={handlePaginated}
                className={style.input}
                type="text"
                value={input}
                name="input"
            />
            <button className={style.button} onClick={next} disabled={disableButtonNext ===true}>
                <svg className={style.svgNext} viewBox="0 0 384 512">
                    <path className={style.path}
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default Paginated