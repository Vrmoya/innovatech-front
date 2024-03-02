import style from './SideNavDashboard.module.css'
import form from '../../assets/form.svg'
import users from '../../assets/users.svg'
import home from '../../assets/home.svg'
import products from '../../assets/products.svg'
import logo from '../../../public/logo-white.png'
import logout from '../../assets/logout.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const SideNavDashboard = ({ onNavItemChange }) => {
    const navigate = useNavigate()

    const handleChange = () => {
        navigate('/')
    }
    return (
        <div className={style.sideNav}>
            <div className={style.navContent}>
                <div className={style.titleContent}>
                    <img src={logo} alt="" className={style.logo} />
                    <h2 className={style.titleLogo}>INNOVA TECH</h2>
                </div>
                <button className={style.buttonNav} onClick={() => onNavItemChange('home')}>
                    <img src={home} alt="" className={style.svg} />
                    <span className={style.span}>Dashboard</span>
                </button>
                <button className={style.buttonNav} onClick={() => onNavItemChange('createProduct')}>
                    <img src={form} alt="" className={style.svg} />
                    <span className={style.span}>Create Product</span>
                </button>
                <button className={style.buttonNav} onClick={() => onNavItemChange('products')}>
                    <img src={products} alt="" className={style.svg} />
                    <span className={style.span}>Products</span>
                </button>
                <button className={style.buttonNav} onClick={() => onNavItemChange('users')}>
                    <img src={users} alt="" className={style.svg} />
                    <span className={style.span}>Users</span>
                </button>
                <button className={style.buttonNav} onClick={handleChange}>
                    <img src={logout} alt="" className={style.svg} />
                    <span className={style.span}>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default SideNavDashboard;