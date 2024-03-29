import style from './Paginated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';

const Paginated = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const order = useSelector(state => state.order)
    const productsByCategoriesLength = useSelector((state) => state.filterByCategories)
    const totalpages = useSelector((state) => state.totalpages)

    const [input, setInput] = useState("1")

    const handlePaginated = (event) => {
        const value = event.target.value;
        setInput(value)
        dispatch({ type: 'SET_PAGE', payload: value })
    }

    useEffect(() => {
        setInput('1')
    }, [categories, order])

    const prev = () => {
        scroll()
        const prevValue = parseInt(input) - 1;
        if (prevValue > 0) {
            setInput(prevValue.toString());
            dispatch({ type: 'SET_PAGE', payload: prevValue.toString() })
        } else {
            setInput("1");
        }
    };

    const next = () => {
        scroll()
        const nextValue = parseInt(input) + 1;
        if (nextValue <= totalpages) {
            setInput(nextValue.toString());
            dispatch({ type: 'SET_PAGE', payload: nextValue.toString() })
        }
        else {
            console.log('Max page reached :(');
        }
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
            <p className={style.pagesInfo}>Page {input} of {totalpages}</p>
            <button className={style.button} onClick={next} disabled={parseInt(input) === totalpages} >
                <svg className={style.svgNext} viewBox="0 0 384 512">
                <path className={style.path}
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
        </div>
    )
}

export default Paginated;