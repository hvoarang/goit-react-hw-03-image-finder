import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Container } from './App.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
	state = {
		pictureName: '',
		page: 1,
	};

	handleFormSubmit = pictureName => {
		this.setState({ pictureName, page: 1 });
	};
	handleLoadMore = () => {
		console.log('click click');
		this.setState(prevState => ({
			page: prevState.page + 1,
		}));
	};
	render() {
		return (
			<>
				<SearchBar onSubmit={this.handleFormSubmit} />
				<Container>
					<ImageGallery>
						<ImageGalleryItem
							pictureName={this.state.pictureName}
							page={this.state.page}
							handleLoadMore={this.handleLoadMore}
						/>
					</ImageGallery>
					<ToastContainer autoClose={3000} position={'top-left'} />
				</Container>
				;
			</>
		);
	}
}
