import css from './Searchbar.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const onChangeInput = e => {
    setInput(e.currentTarget.value.toLowerCase());
  };

 const  handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchForm__button}>
          <FaSearch></FaSearch>
        </button>

        <input
          className={css.searchForm__input}
          name="inputData"
          value={input}
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
