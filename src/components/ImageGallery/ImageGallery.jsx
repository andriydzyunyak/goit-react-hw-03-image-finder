import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ButtonLoadMore } from 'components/Button/Button';

export const ImageGallery = ({
  gallery,
  currentPage,
  totalHits,
  loadMore,
  isLoading,
}) => {
  const totalImages = totalHits - currentPage * 12;
  return (
    <>
      <ul className="ImageGallery">
        {gallery.map(hit => (
          <ImageGalleryItem key={hit.id} hit={hit} />
        ))}
      </ul>
      {totalImages > 0 && !isLoading && <ButtonLoadMore loadMore={loadMore} />}
    </>
  );
};
