import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import logo from "../../../public/logo.png";
import { Link, useLocation } from "react-router-dom";
import PATHROURES from "../../helpers/PathRoutes";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useDispatch, useSelector } from 'react-redux';
import { changeForm, logout, showShoppingCart } from "../../redux/actions";
import imgLogout from '../../assets/logout.svg'


const NavBar = () => {
  const [showNav, setShowNav] = useState(null);
  const [quantityProductsCart, setQuantityProductsCart] = useState(0)
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const showShoppingCartState = useSelector((state) => state.showShoppingCart)

  useEffect(() => {
    if (cart.length > 0) {
      const quantityProducts = cart.reduce((total, product) => (
        total + product.quantity
      ), 0)
      setQuantityProductsCart(quantityProducts);
    } else{
      setQuantityProductsCart(0);
    }
  }, [cart])

  const shoppingCart = () => {
    dispatch(showShoppingCart(true));
  };


  if (location.pathname === PATHROURES.CREATE || location.pathname === PATHROURES.DASHBOARD) {
    return null;
  }

  const toggleNav = () => {
    setShowNav(!showNav);
  };


  const handleChangeForm = (formType) => {
    console.log("Changing form to:", formType);
    dispatch(changeForm(formType));
  };

  const logOut = () => {
    setTimeout(() => {
      dispatch(logout())
    }, 500);
  }

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
              <Link to={'/login'}>
                <button className={style.buttonLog}
                  onClick={() => handleChangeForm('login')}>Log In</button>
              </Link>

              <button className={style.buttonSign}
                onClick={() => handleChangeForm('signup')}>Sign Up</button>
            </div>


          </div>
        </div>
        <div className={style.searchDeskContent}>
          <SearchBar></SearchBar>
        </div>
        <div className={style.cartContainer}>
          {user === null && (
            <div className={style.buttonContainerDesk}>
              <Link to={'/login'}>
                <button className={style.buttonLog}
                  onClick={() => handleChangeForm('login')}>Log In</button>
              </Link>
              <Link to={'/login'}>
                <button className={style.buttonSign}
                  onClick={() => handleChangeForm('signup')}>Sign Up</button>
              </Link>
            </div>
          )}
          {user !== null && (
            <div className={style.isLoginContent}>
              <img src={user?.image} alt="" className={style.userImg} />
              <button onClick={() => logOut()} className={style.buttonLogOut}>
                <img src={imgLogout} alt="" className={style.imgLogout} />
              </button>
            </div>
          )}

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
            <div className={style.countProducts}>
              <span className={style.span}>{quantityProductsCart}</span>
            </div>
          </button>
          {showShoppingCartState && <ShoppingCart />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;