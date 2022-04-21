import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ hit, handleOverlayClick }) => {
  return createPortal(
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={hit.largeImageURL} alt="largeImageURL" />
      </div>
    </div>,
    modalRoot
  );
};

Modal.prototype = {
  hit: PropTypes.object,
};
