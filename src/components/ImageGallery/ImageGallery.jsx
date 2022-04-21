import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';
import PropTypes from 'prop-types';

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
      <ImageGalleryList>
        {gallery.map(hit => (
          <ImageGalleryItem key={hit.id} hit={hit} />
        ))}
      </ImageGalleryList>
      {totalImages > 0 && !isLoading && <Button loadMore={loadMore} />}
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalHits: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
