import style from './CardsContainer.module.css'
import { useSelector } from "react-redux"
import Card from "../Card/Card";

const CardsContainer = () => {
    const productsData = useSelector(state => state.products)

    // console.log(productsData);

    return (
        <div className={style.container}>
            {productsData?.map(product => {
                return <Card
                    key={product?.id}
                    id={product?.id}
                    model={product?.model}
                    price={product?.price}
                    // images={product.image}
                    image={product?.image?.[0]}
                />
            })}
        </div>
    )
}

export default CardsContainer