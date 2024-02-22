import React from 'react';
import style from './NavDashboard.module.css'
import SearchDash from '../SearchDash/SearchDash';

const NavBar = () => {

    return (
        <nav className={style.nav}>
           <SearchDash></SearchDash>
        </nav>
    )
}

export default NavBar