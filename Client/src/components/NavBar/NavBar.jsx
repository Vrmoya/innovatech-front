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
import imgAcount from '../../assets/user3.svg'


const NavBar = () => {
  const [showNav, setShowNav] = useState(null);
  const [quantityProductsCart, setQuantityProductsCart] = useState(0)
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const showShoppingCartState = useSelector((state) => state.showShoppingCart)

  console.log(user);

  useEffect(() => {
    if (cart.length > 0) {
      const quantityProducts = cart.reduce((total, product) => (
        total + product.quantity
      ), 0)
      setQuantityProductsCart(quantityProducts);
    } else {
      setQuantityProductsCart(0);
    }
  }, [cart])

  const shoppingCart = () => {
    dispatch(showShoppingCart(true));
  };


  if (location.pathname === PATHROURES.CREATE || location.pathname === PATHROURES.DASHBOARD || location.pathname === PATHROURES.LOGIN || location.pathname === PATHROURES.RESETPASSWORD) {
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

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
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
            to={PATHROURES.LANDING}
            className={style.linkDesk}
            onClick={toggleNav}
          >
            Home
          </Link>
          <Link
            to={PATHROURES.HOME}
            className={style.linkDesk}
            onClick={toggleNav}
          >
            Products
          </Link>
          <div
            className={`${style.linkContentMobile} ${!showNav && style.hidden}`}
          >
            <button className={style.mobileButtonClose} onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
            <div className={style.searchMobileContent}>
              <SearchBar></SearchBar>
            </div>
            <Link
              to={PATHROURES.LANDING}
              className={style.link}
              onClick={toggleNav}
            >
              Home
            </Link>
            <Link
              to={PATHROURES.HOME}
              className={style.link}
              onClick={toggleNav}
            >
              Products
            </Link>
            <div className={style.buttonContainerMobile}>
              <Link to={'/login'} onClick={toggleNav}>
                <button className={style.buttonLog}
                  onClick={() => handleChangeForm('login')}>Log In</button>
              </Link>

              <Link onClick={toggleNav} to={'/login'}>
                <button className={style.buttonSign}
                  onClick={() => handleChangeForm('signup')}>Sign Up</button>
              </Link>
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
            <div className={style.isLoginContent} >
              <img src={user?.image} alt="" className={style.userImg} onClick={toggleUserDropdown} />
              {showUserDropdown && (
                <div className={style.dropDown}>
                  {/* <Link to={'/users'} className={style.linkDrop} onClick={toggleUserDropdown}>Manage your Account</Link> */}
                  <button onClick={() => logOut()} className={style.buttonLogOut}>
                    <img src={imgLogout} alt="" className={style.svg} />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}

          <button className={style.cartButton} onClick={() => shoppingCart()}>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
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