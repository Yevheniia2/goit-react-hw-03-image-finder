import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, toggleModal}) => (
    <ul className="imageGallery">
        {images.map(image => {
            return (<ImageGalleryItem key={image.id} largeImageURL={image.largeImageURL} webFormatURL={image.webFormatURL} toggleModal={toggleModal} />);
        })}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            largeImageURL: PropTypes.string,
            webformatURL: PropTypes.string,
        })
    ),
};