import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
const galleryBody = document.querySelector('body');

export class Modal extends Component {
	componentDidMount() {
		galleryBody.classList.add('stop-scroll');
		window.addEventListener('keydown', this.handleKeyDown);
	}
	componentWillUnmount() {
		galleryBody.classList.remove('stop-scroll');
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = e => {
		if (e.code === 'Escape') {
			console.log('first');
			this.props.onClose();
		}
	};
	render() {
		return createPortal(
			<Overlay onClick={this.props.onClose}>
				<ModalImg src={this.props.largeImage} alt="" width="900" height="700" />
			</Overlay>,
			modalRoot
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	largeImage: PropTypes.string.isRequired,
};
