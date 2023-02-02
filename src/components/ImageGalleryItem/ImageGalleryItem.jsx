import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner/Spinner';
import { Modal } from 'components/Modal/Modal';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { Container } from 'components/App/App.styled';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
	state = {
		picture: [],
		status: 'idle',
		showModal: false,
		modalPicture: null,
		page: 1,
	};
	componentDidUpdate(prevProps, prevState) {
		const prevName = prevProps.pictureName;
		const nextName = this.props.pictureName;
		if (prevName !== nextName || prevProps.page !== this.props.page) {
			this.setState({ status: 'pending' });
			fetch(
				`https://pixabay.com/api/?key=30188336-4b4f26bd7e50c24034d7e6b40&q=${nextName}&page=${this.props.page}&per_page=20`
			)
				.then(r => r.json())
				.then(images => {
					if (!images.hits.length) {
						toast('unfortunately there are no images with such query');
						this.setState({ status: 'idle' });
						this.setState({ picture: [] });
						return;
					}
					this.setState({
						picture:
							this.props.page > 1
								? [...this.state.picture, ...images.hits]
								: images.hits,
						status: 'resolved',
					});
				})
				.finally(() =>
					setTimeout(() => {
						if (this.props.page > 1) {
							this.onScroll();
						}
					}, 400)
				);
		}
	}

	toggleModal = URL => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
			modalPicture: URL,
		}));
	};

	onScroll = () => {
		window.scrollBy({
			top: window.innerHeight,
			behavior: 'smooth',
		});
	};
	render() {
		const { picture, status, showModal } = this.state;
		const markUp = picture?.map(({ tags, largeImageURL }) => (
			<GalleryItem key={largeImageURL}>
				<GalleryImage
					src={largeImageURL}
					alt={tags}
					width="280"
					height="260"
					onClick={() => this.toggleModal(largeImageURL)}
				/>
			</GalleryItem>
		));
		return (
			<>
				<Container>
					{status === 'idle' && <h1>Please enter the search query</h1>}
					{status === 'pending' && <Spinner />}
				</Container>
				{markUp}
				{this.state.picture.length ? (
					<LoadMoreBtn onClick={this.props.handleLoadMore} />
				) : null}
				{showModal && (
					<Modal
						onClose={this.toggleModal}
						largeImage={this.state.modalPicture}
					/>
				)}
			</>
		);
	}
}

ImageGalleryItem.propTypes = {
	pictureName: PropTypes.string.isRequired,
};
