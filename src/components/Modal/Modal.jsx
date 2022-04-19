export const Modal = ({ hit, handleOverlayClick }) => {
  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img src={hit.largeImageURL} alt="largeImageURL" />
      </div>
    </div>
  );
};
