import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  ImageGalleryCard,
  ImageGalleryCardImg,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  componentDidMount() {
    window.document.addEventListener('keydown', this.handleKeyEsc);
  }
  componentWillUnmount() {
    window.document.removeEventListener('keydown', this.handleKeyEsc);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleKeyEsc = evt => {
    if (evt.code === 'Escape') this.closeModal({});
  };

  handleOverlayClick = evt => {
    if (evt.target === evt.currentTarget) this.closeModal({});
  };

  render() {
    const { webImage, modalImage } = this.props;
    const { isModalOpen } = this.state;
    return (
      <ImageGalleryCard>
        <ImageGalleryCardImg
          src={webImage}
          alt="name"
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal
            image={modalImage}
            handleOverlayClick={this.handleOverlayClick}
          />
        )}
      </ImageGalleryCard>
    );
  }
}

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
};
