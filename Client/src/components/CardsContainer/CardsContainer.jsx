import { useSelector } from "react-redux"
import Card from "../Card/Card";

const CardsContainer = () => {
    const productsData = useSelector(state => state.products.data)

    return (
        <div>
            {productsData?.map(product => {
                return <Card
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