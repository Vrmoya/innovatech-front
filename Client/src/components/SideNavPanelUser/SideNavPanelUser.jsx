import style from './SideNavPanelUser.module.css'
import shop from '../../assets/shop.svg'
import users from '../../assets/users.svg'
import home from '../../assets/home.svg'
import settings from '../../assets/settings.svg'
import logo from '../../../public/logo-white.png'
import user2 from '../../assets/user2.svg'
import { logout } from '../../redux/actions'
import { useDispatch } from 'react-redux'

import React from 'react'



const SideNavPanelUser = ({ onOptionChange }) => {


    const dispatch= useDispatch();
    const handleOptionClick = (option) => {
        onOptionChange(option);
    };


    const handleHomeClick = () => {
        window.location.href = '/'
    };

    
    
  const handleLogOut = () => {
    dispatch(logout());
    window.location.href = 'https://innovatechok.vercel.app/';
  };
    
    return (
        <div className={style.sideNav}>
            <div className={style.navContent}>
                <div className={style.titleContent}>
                    <h2 className={style.titleLogo}>User Profile</h2>
                </div>
                <button className={style.buttonNav} onClick={handleHomeClick}>
                
                    <img src={home} alt="" className={style.svg} />
                    <span className={style.span}>Home</span>
                </button>
                <button className={style.buttonNav} onClick={() => handleOptionClick('profile')}>
                <img src={user2} alt="" className={style.svg} />
                    <span className={style.span}>My Profile</span>
                </button>
                <button className={style.buttonNav}
                onClick={() => handleOptionClick('orders')}
                >
                    <img src={shop} alt="" className={style.svg} />
                    <span className={style.span}>My Orders</span>
                </button>
                <button className={style.buttonNav}  onClick={() => handleOptionClick(handleLogOut)}>
                    <img src={settings} alt="" className={style.svg} />
                    <span className={style.span}>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default SideNavPanelUser


