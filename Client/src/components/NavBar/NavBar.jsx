import React, { useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../../public/logo.png";
import { Link, useLocation } from "react-router-dom";
import PATHROURES from "../../helpers/PathRoutes";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const NavBar = () => {
  const [showNav, setShowNav] = useState(null);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const location = useLocation();

  if (location.pathname === PATHROURES.CREATE) {
    return null;
  }

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const shoppingCart = () => {
    if (showShoppingCart === false) {
      setShowShoppingCart(true);
    } else {
      setShowShoppingCart(false);
    }
  };

  return (
    <nav className={style.nav}>
      <div className={style.mainContent}>
        <div className={style.mobileButtonContent}>
          <button className={style.mobileButtonOpen} onClick={toggleNav}>
            ☰
          </button>
        </div>
        <div className={style.linkContainer}>
          <Link to={PATHROURES.LANDING}>
            <img src={logo} alt="" className={style.img} />
          </Link>
          <Link to={PATHROURES.LANDING} className={style.title}>
            INNOVA TECH
          </Link>
          <Link
            to={PATHROURES.HOME}
            className={style.linkDesk}
            onClick={toggleNav}
          >
            All
          </Link>
          <Link
            to={PATHROURES.HOME}
            className={style.linkDesk}
            onClick={toggleNav}
          >
            Laptops
          </Link>
          <Link
            to={PATHROURES.HOME}
            className={style.linkDesk}
            onClick={toggleNav}
          >
            Smartphones
          </Link>
          <div
            className={`${style.linkContentMobile} ${!showNav && style.hidden}`}
          >
            <button className={style.mobileButtonClose} onClick={toggleNav}>
              ✘
            </button>
            <div className={style.searchMobileContent}>
              <SearchBar></SearchBar>
            </div>
            <Link
              to={PATHROURES.HOME}
              className={style.link}
              onClick={toggleNav}
            >
              All
            </Link>
            <Link
              to={PATHROURES.HOME}
              className={style.link}
              onClick={toggleNav}
            >
              Laptops
            </Link>
            <Link
              to={PATHROURES.HOME}
              className={style.link}
              onClick={toggleNav}
            >
              Smartphones
            </Link>
            <div className={style.buttonContainerMobile}>
              <button className={style.buttonLog}>Log In</button>
              <button className={style.buttonSign}>Sign Up</button>
            </div>
          </div>
        </div>
        <div className={style.searchDeskContent}>
          <SearchBar></SearchBar>
        </div>
        <div className={style.cartContainer}>
          <div className={style.buttonContainerDesk}>
            <button className={style.buttonLog}>Log In</button>
            <button className={style.buttonSign}>Sign Up</button>
          </div>
          <button className={style.cartButton} onClick={() => shoppingCart()}>
            <svg
              className={style.cartSvg}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
              </g>
            </svg>
          </button>
          {showShoppingCart && <ShoppingCart></ShoppingCart>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
