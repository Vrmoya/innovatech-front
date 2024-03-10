import style from './ProductsDashboard.module.css'
import { useSelector } from 'react-redux';
import CardDashboard from '../CardDashboard/CardDashboard';

const ProductsDashboard = () => {
    const products = useSelector(state => state.allProducts)

    return (
        <div className={style.container}>
            <div className={style.filterContent}>
                <h1 className={style.h1}>Your Products</h1>
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
                            isActive={product.isActive}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default ProductsDashboard;