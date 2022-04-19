// import { BallTriangle } from 'react-loader-spinner';
import ClipLoader from 'react-spinners/ClipLoader';
export const Loader = ({ loading }) => {
  return (
    <div className="Spinner">
      <ClipLoader color="#00BFFF" loading={loading} size={150} />
    </div>
    // <BallTriangle
    //   className="Spinner"
    //   color="#00BFFF"
    //   height={60}
    //   width={60}
    //   ariaLabel="loading"
    //   loading={loading}
    // />
  );
};
