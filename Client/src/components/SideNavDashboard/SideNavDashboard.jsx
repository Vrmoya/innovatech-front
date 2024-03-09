import style from './SideNavDashboard.module.css'
import form from '../../assets/form.svg'
import users from '../../assets/users.svg'
import home from '../../assets/home.svg'
import products from '../../assets/products.svg'
import logoutsvg from '../../assets/logout.svg';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions'

const SideNavDashboard = ({ onNavItemChange, selectedNavItem }) => {
    const navigate = useNavigate()
    const admin = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <div className={style.sideNav}>
            <div className={style.buttonContent}>
                <button className={`${style.buttonNav} ${selectedNavItem === 'home' && style.selected}`} onClick={() => onNavItemChange('home')}>
                    <img src={home} alt="" className={style.svg} />
                </button>
                <button className={`${style.buttonNav} ${selectedNavItem === 'newProduct' && style.selected}`} onClick={() => onNavItemChange('newProduct')}>
                    <img src={form} alt="" className={style.svg} />
                </button>
                <button className={`${style.buttonNav} ${selectedNavItem === 'products' && style.selected}`} onClick={() => onNavItemChange('products')}>
                    <img src={products} alt="" className={style.svg} />
                </button>
                <button className={`${style.buttonNav} ${selectedNavItem === 'customers' && style.selected}`} onClick={() => onNavItemChange('customers')}>
                    <img src={users} alt="" className={style.svg} />
                </button>
                <button className={style.buttonNav} onClick={handleChange}>
                    <img src={logoutsvg} alt="" className={style.svg} />
                </button>
            </div>
        </div>
    )
}

export default SideNavDashboard;