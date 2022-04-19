import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

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
    const { hit } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className="ImageGalleryItem">
        <img
          src={hit.webformatURL}
          alt="name"
          className="ImageGalleryItem-image"
          onClick={this.openModal}
        />
        {isModalOpen && (
          <Modal hit={hit} handleOverlayClick={this.handleOverlayClick} />
        )}
      </li>
    );
  }
}
