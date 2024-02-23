import style from './CardsContainer.module.css'
import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card";
import {getProducts } from "../../redux/actions";
import { useEffect } from 'react';

const CardsContainer = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.products)

    const categories = useSelector(state => state.categories)
    const order = useSelector(state => state.order)
    const model = useSelector(state => state.model)
    const pagenumber = useSelector(state=> state.pagenumber)
    useEffect(() => {
        dispatch(getProducts(categories, order, pagenumber, "6",model));
      }, [model,categories,order,pagenumber]);
    
    // console.log(productsData);

    return (
        <div className={style.container}>
            {productsData.length === 0 ? (
                <p>There are no products that match</p>
            ) : (
                productsData.map(product => (
                    <Card
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

export default CardsContainer