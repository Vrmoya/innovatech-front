import style from './SideNavDashboard.module.css'
import form from '../../assets/form.svg'
import users from '../../assets/users.svg'
import home from '../../assets/home.svg'
import products from '../../assets/products.svg'
import logo from '../../../public/logo-white.png'

const SideNavDashboard = () => {
    return (
        <div className={style.sideNav}>
            <div className={style.navContent}>
                <div className={style.titleContent}>
                    <img src={logo} alt="" className={style.logo}/>
                    <h2 className={style.titleLogo}>INNOVA TECH</h2>
                </div>
                <button className={style.buttonNav}>
                    <img src={home} alt="" className={style.svg} />
                    <span className={style.span}>Dashboard</span>
                </button>
                <button className={style.buttonNav}>
                    <img src={form} alt="" className={style.svg} />
                    <span className={style.span}>Create Product</span>
                </button>
                <button className={style.buttonNav}>
                    <img src={products} alt="" className={style.svg} />
                    <span className={style.span}>Products</span>
                </button>
                <button className={style.buttonNav}>
                    <img src={users} alt="" className={style.svg} />
                    <span className={style.span}>Users</span>
                </button>
            </div>
        </div>
    )
}

export default SideNavDashboard;