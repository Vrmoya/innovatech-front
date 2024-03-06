import { useSelector } from 'react-redux';
import style from './UsersDashboard.module.css'

const UsersDashboard = () => {
    const users = useSelector(state => state.allUsers)

    return (
        <div className={style.container}>
            <div>
                <h1 className={style.h1}>Customers</h1>
                {users.length === 0 ? (
                    <p>There are no users that match</p>
                ) : (
                    users.map(user => (
                        <div className={style.usersContainer}>
                            <h3 className={style.userID}>{user.id}</h3>
                            <img src={user.image} alt="" className={style.userImg} />
                            <div>
                                <h1 className={style.userName}>{user.name}</h1>
                                <h2 className={style.userEmail}>{user.email}</h2>
                            </div>
                            <button className={style.button}>Disable</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default UsersDashboard;