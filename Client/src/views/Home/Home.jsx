import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    
    return(
        <div>
            <CardsContainer></CardsContainer>
        </div>
    )
}

export default Home;