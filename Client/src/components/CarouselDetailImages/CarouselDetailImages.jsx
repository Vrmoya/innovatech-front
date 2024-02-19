import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import styles from './../CarouselDetailImages/CarouselDetailImages.module.css';

const CarouselDetailImages = ({images}) => {
    return (
        <div>
            {images && (
                <ImageGallery
                    items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                />
            )}
        </div>
    )
}
export default CarouselDetailImages;

