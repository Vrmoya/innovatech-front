import { useSelector } from 'react-redux';
import style from './UsersDashboard.module.css'

const UsersDashboard = () => {

    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>Customers</h1>
            </div>
        </div>
    )
}

export default UsersDashboard;