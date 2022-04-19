import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  return (
    <ul className="gallery">
      {gallery.map(hit => (
        <ImageGalleryItem key={hit.id} hit={hit} />
      ))}
    </ul>
  );
};
