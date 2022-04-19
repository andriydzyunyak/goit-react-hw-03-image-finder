import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ButtonLoadMore } from 'components/Button/Button';

export const ImageGallery = ({ gallery, totalHits, loadMore, loading }) => {
  return (
    <>
      <ul className="ImageGallery">
        {gallery.map(hit => (
          <ImageGalleryItem key={hit.id} hit={hit} />
        ))}
      </ul>
      {totalHits > 12 && !loading && <ButtonLoadMore loadMore={loadMore} />}
    </>
  );
};
