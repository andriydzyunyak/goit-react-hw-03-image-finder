import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from 'components/Modal/Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ hit, handleOverlayClick }) => {
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <img src={hit.largeImageURL} alt="largeImageURL" />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  hit: PropTypes.object.isRequired,
  handleOverlayClick: PropTypes.func.isRequired,
};
