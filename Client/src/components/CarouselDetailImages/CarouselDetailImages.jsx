import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './../CarouselDetailImages/CarouselDetailImages.module.css';
import { useDispatch, useSelector } from "react-redux";


const data = [
    {
        original: "https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221045/Innova%20Tech/wjcvklxkirwpla1llq8z.png",
        thumbnail: "https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221045/Innova%20Tech/wjcvklxkirwpla1llq8z.png",
      
    },
    {
        original: "https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221052/Innova%20Tech/tfeq6np38cx2rlaimwci.png",
        thumbnail: "https://res.cloudinary.com/dfhk5g0yv/image/upload/v1708221052/Innova%20Tech/tfeq6np38cx2rlaimwci.png",
        
    }
]

const CarouselDetailImages = () => {
    return(
        <div>
            <ImageGallery items={data} showPlayButton={false} showFullscreenButton={false}/>
        </div>
    )
}
export default CarouselDetailImages;