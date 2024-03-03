import { useSelector } from 'react-redux';
import style from './UsersDashboard.module.css'

const UsersDashboard = () => {
    const customers = useSelector(state => state.customers);
    console.log(customers);

    return (
        <div>{customers?.name}</div>
    )
}

export default UsersDashboard;