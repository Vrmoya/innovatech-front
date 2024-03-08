import { useSelector } from 'react-redux';
import style from './UsersDashboard.module.css'

const UsersDashboard = () => {
    const users = useSelector(state => state.allUsers)

    const nonAdminUsers = users.filter(user => !user.isAdmin);

    const formatDate = (dateString) => {
        return dateString.split('T')[0]; // Obtiene la parte de la fecha antes de la letra 'T'
    };

    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>Customers</h1>
            </div>
            <div className={style.mainContent}>
                {nonAdminUsers.length === 0 ? (
                    <p>There are no users that match</p>
                ) : (
                    nonAdminUsers.map(user => (
                        <div className={style.usersContainer}>
                            <div className={style.info}>
                                <h3 className={style.userID}>{user.id}</h3>
                                <img src={user.image} alt="" className={style.userImg} />
                                <h2 className={style.userName}>{user.name}</h2>
                                <h2 className={style.userEmail}>{user.email}</h2>

                            </div>
                            <div className={style.buttonContent}>
                                <h2 className={style.date}>{formatDate(user.createdAt)}</h2>
                                <button className={style.button}>Block</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default UsersDashboard;