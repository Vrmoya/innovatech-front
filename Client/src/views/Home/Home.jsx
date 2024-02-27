import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Filter from '../../components/Filter/Filter'
import Order from '../../components/Order/Order'
import Paginated from '../../components/Paginated/Paginated'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {

    const user = useSelector(state => state.user)
    console.log(user);

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <Filter></Filter>
                <CardsContainer></CardsContainer>
                <Order></Order>
            </div>
            <div className={style.mobileContent}>
                <Filter></Filter>
                <Order></Order>
                <CardsContainer></CardsContainer>
            </div>
            <div className={style.paginated}>
                <Paginated></Paginated>
            </div>
        </div>
    )
}

export default Home;