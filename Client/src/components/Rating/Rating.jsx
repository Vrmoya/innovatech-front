import { useSelector } from "react-redux";


const Rating = () => {
    const rating = useSelector((state) => state.rating)

    return (
        <>
        {rating.length === 0 && 
        <div>
            
        </div>
        }
        <div>
        </div>
        </>
    )

}
export default Rating;
