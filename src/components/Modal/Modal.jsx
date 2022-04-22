import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ image, handleOverlayClick }) => {
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <img src={image} alt="largeImageURL" />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};
