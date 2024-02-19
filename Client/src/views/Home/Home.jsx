import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions';
import Filter from '../../components/Filter/Filter'
import Order from '../../components/Order/Order'

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className={style.container}>
                <Filter></Filter>
                <CardsContainer></CardsContainer>
                <Order></Order>
        </div>
    )
}

export default Home;