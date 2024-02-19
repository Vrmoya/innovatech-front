import style from './Paginated.module.css'
import { useDispatch } from "react-redux";
import { getProducts } from '../../redux/actions';

const Paginated = () => {
    const dispatch = useDispatch()



    const handlePaginated = (page) => {
        console.log(page);
        dispatch(getProducts("", "", page))
    }

    return(
        <div className={style.container}>
            <input
                    className={style.input}
                    // onChange={e => onChange(e)}
                    // onKeyDown={e => onKeyDown(e)}
                    name="page"
                    autoComplete="off"
                    // value={input}
                />
        </div>
    )
}

export default Paginated