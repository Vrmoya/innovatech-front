import style from './Home.module.css'
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Filter from '../../components/Filter/Filter'
import Order from '../../components/Order/Order'
import Paginated from '../../components/Paginated/Paginated'

const Home = () => {

    return (
        <div className={style.container}>
            <div className={style.mainContent}>
                <Filter></Filter>
                <CardsContainer></CardsContainer>
                <Order></Order>
            </div>
            <div className={style.paginated}>
                <Paginated></Paginated>
            </div>

        </div>
    )
}

export default Home;