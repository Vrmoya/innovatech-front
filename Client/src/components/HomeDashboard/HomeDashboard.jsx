import { Line } from 'react-chartjs-2';
import style from './HomeDashboard.module.css';
import LineChart from './LinesChart';
import Bars from './BarsChart';
import Pies from './PiesChart';
import totalProduct from '../../assets/total-product.svg'
import sold from '../../assets/sold.svg'
import totalCustomers from '../../assets/total-customers.svg'
import { useSelector } from 'react-redux';

const HomeDashboard = () => {
    const products = useSelector(state => state.allProducts)
    const users = useSelector(state => state.allUsers.filter(user => !user.isAdmin))
    const users2 = useSelector(state => state.allUsers)

    console.log(users2);


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
                        <h2 className={style.h2}>0</h2>
                        <p className={style.p}>Sold Products</p>
                    </div>
                    <div className={style.customersContainer}>
                        <div className={style.customersContent}>
                            <img src={totalCustomers} alt="" className={style.svg} />
                        </div>
                        <h2 className={style.h2}>{users?.length}</h2>
                        <p className={style.p}>Total Customers</p>
                    </div>
                </div>
                <div className={style.barsContent}>
                    <Bars></Bars>
                </div>
            </div>
            <div>
            </div>
            <div className={style.graphicsContainer}>
                <div className={style.lineChart}>
                    <LineChart></LineChart>
                </div>
                <div className={style.piesChart}>
                    <Pies></Pies>
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;