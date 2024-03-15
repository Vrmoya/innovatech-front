import { Line } from 'react-chartjs-2';
import style from './HomeDashboard.module.css';
import LineChart from './LinesChart';
import Bars from './BarsChart';
import Pies from './PiesChart';
import totalProduct from '../../assets/total-product.svg'
import sold from '../../assets/sold.svg'
import disabled from '../../assets/disabled.svg'
import useradmin from '../../assets/useradmin.svg'
import userblock from '../../assets/userblock.svg'
import totalCustomers from '../../assets/total-customers.svg'
import { useSelector } from 'react-redux';

const HomeDashboard = () => {
    const products = useSelector(state => state.allProducts)
    const users = useSelector(state => state.allUsers.filter(user => !user.isAdmin))
    const disabledProductsCount = useSelector(state => state.allProducts.filter(product => !product.isActive).length)
    const adminUsersCount = useSelector(state => state.allUsers.filter(user => user.isAdmin).length)
    const blockUserCount = useSelector(state => state.allUsers.filter(user => !user.isActive).length)
    const solds = useSelector(state => state.allSolds)


    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>Dashboard</h1>
            </div>
            <div className={style.mainContent}>
                <div className={style.section}>
                    <div className={style.productContainer}>
                        <div className={style.productContent}>
                            <img src={totalProduct} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{products?.length}</h2>
                        <p className={style.p}>Total Products</p>
                    </div>
                    <div className={style.soldContainer}>
                        <div className={style.soldContent}>
                            <img src={sold} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{solds?.length}</h2>
                        <p className={style.p}>Sold Products</p>
                    </div>
                    <div className={style.disabledContainer}>
                        <div className={style.disabledContent}>
                            <img src={disabled} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{disabledProductsCount}</h2>
                        <p className={style.p}>Products Disabled</p>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={style.customersContainer}>
                        <div className={style.customersContent}>
                            <img src={totalCustomers} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{users?.length}</h2>
                        <p className={style.p}>Total Customers</p>
                    </div>
                    <div className={style.adminContainer}>
                        <div className={style.adminContent}>
                            <img src={useradmin} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{adminUsersCount}</h2>
                        <p className={style.p}>Admin Users</p>
                    </div>
                    <div className={style.blockContainer}>
                        <div className={style.blockContent}>
                            <img src={userblock} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{blockUserCount}</h2>
                        <p className={style.p}>Block Users</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;