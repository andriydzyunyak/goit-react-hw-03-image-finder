import HashLoader from 'react-spinners/HashLoader';
import { Spinner } from 'components/Loader/Loader.styled';
import PropTypes from 'prop-types';

export const Loader = ({ loading }) => {
  return (
    <Spinner>
      <HashLoader color="#ff0000" loading={loading} size={65} />
    </Spinner>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
