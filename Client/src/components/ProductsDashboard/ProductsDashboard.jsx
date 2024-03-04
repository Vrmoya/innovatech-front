import style from './ProductsDashboard.module.css'
import { useSelector, useDispatch } from 'react-redux';

import CardDashboard from '../CardDashboard/CardDashboard';
import { getCategories } from '../../redux/actions';

const ProductsDashboard = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    const handleFilter = (category) => {
        dispatch(getCategories(category.target.value))
      }

    return (
        <div className={style.container}>
            <div className={style.filterContent}>
                <h1 className={style.h1}>Your Products</h1>
                <select name="" id="" className={style.select} onChange={handleFilter}>
                    <option value="">All</option>
                    <option value="tablet">Tablet</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="headphone">Headphone</option>
                    <option value="keyboard">Keyboard</option>
                </select>
            </div>
            <div className={style.products}>
                {products.length === 0 ? (
                    <p>There are no products that match</p>
                ) : (
                    products.map(product => (
                        <CardDashboard
                            key={product.id}
                            id={product.id}
                            model={product.model}
                            price={product.price}
                            image={product.image?.[0]}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductsDashboard;