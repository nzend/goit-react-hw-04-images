import { ThreeDots } from 'react-loader-spinner';
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.spinner}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
