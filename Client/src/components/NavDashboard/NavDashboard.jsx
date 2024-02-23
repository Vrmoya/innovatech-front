import React from 'react';
import style from './NavDashboard.module.css';
import SearchDash from '../SearchDash/SearchDash';
import logout from '../../assets/logout.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className={style.nav}>
            <SearchDash></SearchDash>
            <Link to={'/'}>
                <img src={logout} alt="" className={style.svg} />
            </Link>
        </nav>
    )
}

export default NavBar