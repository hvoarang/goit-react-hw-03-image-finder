import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ children }) => {
	return <ImageGalleryList>{children}</ImageGalleryList>;
};

ImageGallery.propTypes = {
	children: PropTypes.node.isRequired,
};
