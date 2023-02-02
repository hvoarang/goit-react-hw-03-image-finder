import { LoadMore } from './LoadMoreBtn.styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => {
	return (
		<LoadMore type="button" onClick={onClick}>
			Load More
		</LoadMore>
	);
};

LoadMoreBtn.propTypes = {
	onClick: PropTypes.func.isRequired,
};
