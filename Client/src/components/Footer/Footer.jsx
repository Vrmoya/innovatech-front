import React from 'react';
import { Link } from "react-router-dom";
import PATHROURES from '../../helpers/PathRoutes';
import logo from '../../../public/logo.png'
import style from './Footer.module.css'; // Asegúrate de tener el archivo de estilos correspondiente

const Footer = () => {
  return (
    <footer className={style.footer}>

        <div className={style.linkContainer}>
                    <Link to={PATHROURES.LANDING}>
                        <img src={logo} alt="" className={style.img} />
                    </Link>
                    <Link to={PATHROURES.LANDING} className={style.title}>INNOVA TECH</Link>

        <nav className={style.nav}>
        <Link to={PATHROURES.HOME} className={style.link}  >Home</Link>
        <Link to={PATHROURES.ABOUT} className={style.link} >About</Link>
        </nav>

        </div>
        
        <div className={style.text}>
                <p>© 2024 Henry PF. Todos los derechos reservados.</p>
            </div>

      
     {/*
      <div className={style.right}>
        <a href="#" className={style.link}>All</a>
        <a href="#" className={style.link}>Laptops</a>
        <a href="#" className={style.link}>Smartphone</a>
  </div>*/}
    </footer>
  );
};

export default Footer;