import { useSelector } from 'react-redux';
import style from './SoldsDashboard.module.css';



const SoldsDashboard = () => {
    const allSolds = useSelector(state => state.allSolds)
    console.log(allSolds);

    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>Sales</h1>
            </div>
            <div  className={style.mainContent}>
                {allSolds.map(sold => (
                    <div className={style.content} key={sold.id}>
                        <h2 className={style.total}>Total: {sold.total}</h2>
                        <ul>
                            {sold.cartItems.map(item => (
                                <li key={item.id} className={style.li}>
                                    <p className={style.p}>Product: {item.name}</p>
                                    <p className={style.p}>Price: ${item.price}</p>
                                    <p className={style.p}>Quantity: {item.quantity}</p>
                                    <p className={style.p}>Date: {item.createdAt}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default SoldsDashboard;