import style from './NavBar.module.css'
import logo from '../../../public/logo.png'
import { Link } from "react-router-dom";
import PATHROURES from '../../helpers/PathRoutes';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        <nav className={style.container}>
            <div className={style.linkContainer}>
                <Link to={PATHROURES.HOME}>
                    <img src={logo} alt="" className={style.img} />
                </Link>
                <Link to={PATHROURES.HOME} className={style.title}>INNOVA TECH</Link>
                <div className={style.linkContent}>
                    <Link to={PATHROURES.PRODUCTS} className={style.link}>All</Link>
                    <Link to={PATHROURES.PRODUCTS} className={style.link}>Laptops</Link>
                    <Link to={PATHROURES.PRODUCTS} className={style.link}>Smartphones</Link>
                </div>
            </div>
            <div className={style.searchContainer}>
                <SearchBar></SearchBar>
            </div>
            <div className={style.carContainer}>
                <div className={style.buttonContainer}>
                    <button className={style.button}>Log In</button>
                    <button className={style.button}>Sign Up</button>
                </div>
                <button>
                    <svg className={style.car} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></g></svg>
                </button>

            </div>
        </nav>
    )
}

export default NavBar