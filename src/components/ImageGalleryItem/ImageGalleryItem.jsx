export const ImageGalleryItem = ({ hit }) => {
  return (
    <li className="gallery-item">
      <img src={hit.webformatURL} alt="name" />
    </li>
  );
};
