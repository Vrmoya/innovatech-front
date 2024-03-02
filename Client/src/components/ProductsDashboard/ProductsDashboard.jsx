import style from './ProductsDashboard.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {getProducts } from "../../redux/actions";
import { useEffect } from 'react';
import CardDashboard from '../CardDashboard/CardDashboard';

const ProductsDashboard = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    console.log(products);
    const categories = useSelector(state => state.categories)
    const order = useSelector(state => state.order)
    const model = useSelector(state => state.model)
    const pagenumber = useSelector(state=> state.pagenumber)
    useEffect(() => {
        dispatch(getProducts(categories, order, pagenumber, "",model));
      }, [model,categories,order,pagenumber]);

    
    return (
        <div className={style.container}>
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
    )
}

export default ProductsDashboard;