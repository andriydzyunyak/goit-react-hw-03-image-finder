// import { BallTriangle } from 'react-loader-spinner';
import HashLoader from 'react-spinners/HashLoader';
export const Loader = ({ loading }) => {
  return (
    <div className="Spinner">
      <HashLoader color="#ff0000" loading={loading} size={65} />
    </div>
  );
};
