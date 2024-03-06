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
                    {user !== null && (
                        <>
                            <h2 className={style.greeting}>{`👋 Hello, ${user?.name}`}</h2>
                            <img src={user?.image} alt="" className={style.userImg} />
                        </>
                    )} {user === null && (
                        <>
                            <h2 className={style.greeting}>👋 Hello, Admin</h2>
                            <img src='https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179865.jpg' alt="" className={style.userImg} />
                        </>
                    )}

                </div>
            </div>
        </nav>
    )
}

export default NavBar