import style from './Error.module.css'
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.mainContent}>
                    <h1 className={style.text}>404</h1>
                </div>
                <div className={style.mainContent}>
                    <h2 className={style.text}>PAGE NOT FOUND</h2>
                </div>
                <Link to={'/'} className={style.mainContent}>
                    <button className={style.button}>Back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default Error;