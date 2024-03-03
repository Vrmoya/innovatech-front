import React from 'react';
import style from './NavDashboard.module.css';
import SearchDash from '../SearchDash/SearchDash';
import { useSelector } from 'react-redux';

const NavBar = () => {

    const user = useSelector(state => state.user)

    return (
        <nav className={style.nav}>
            <div className={style.mainContent}>
                <SearchDash></SearchDash>
                <div className={style.userContent}>
                    <h2 className={style.greeting}>{`👋 Hello, ${user?.name}`}</h2>
                    <img src={user?.image} alt="" className={style.userImg} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar