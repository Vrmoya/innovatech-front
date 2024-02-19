import style from './Paginated.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../redux/actions';
import { useState } from 'react';

const Paginated = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState("")
    const products = useSelector(state => state.products)

    const handlePaginated = (event) => {
        const value = event.target.value;

        setInput(value)
        dispatch(getProducts("tablet", "", value))
    }

    const prev = () => {
        const prevValue = parseInt(input) - 1;
        if (prevValue > 0) {
            setInput(prevValue.toString());
            dispatch(getProducts("", "", prevValue.toString()));
        } else {
            setInput("-1");
        }
    };

    const next = () => {
        const prevValue = parseInt(input) + 1;
        if (prevValue > 0) {
            setInput(prevValue.toString());
            dispatch(getProducts("", "", prevValue.toString()));
        } else {
            setInput("+1");
        }
    };
    

    return(
        <div className={style.container}>
            <button onClick={prev}>Prev</button>
            <input
                    onChange={handlePaginated}
                    className={style.input}
                    type="text" 
                    value={input}
                    name= "input"
                />
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Paginated