import { useDispatch, useSelector } from 'react-redux';
import style from './UsersDashboard.module.css'
import { toggleUser } from '../../redux/actions';
import { useState } from 'react';

const UsersDashboard = () => {
    const users = useSelector(state => state.allUsers)
    const dispatch = useDispatch()

    const nonAdminUsers = users.filter(user => !user.isAdmin);

    const formatDate = (dateString) => {
        return dateString.split('T')[0]; // Obtiene la parte de la fecha antes de la letra 'T'
    };

    const toggleHandler = (id, isActive) => {
        
        if (isActive === true) {
            swal("User Blocked", "Successful operation!", "success");
            dispatch(toggleUser(id));
        } else {
            swal("User Activated", "Successful operation!", "success");
            dispatch(toggleUser(id));
        }
    }

    console.log(users);

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
                                {user.isActive ? (
                                    <button className={style.disable} onClick={() => toggleHandler(user.id, user.isActive)}>
                                        Block
                                    </button>
                                ) : (
                                    <button className={style.enable} onClick={() => toggleHandler(user.id, user.isActive)}>
                                        Activated
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

        </div>
    )
}

export default UsersDashboard;