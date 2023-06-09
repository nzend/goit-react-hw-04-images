import css from "./Button.module.css";
import PropTypes from 'prop-types';

const Button = ({ onNextPage }) => {
  return (
    <button className={css.button__load} onClick={onNextPage}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func
};
