import { useState } from 'react';
import css from './SearchForm.module.css'
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(query);

    //clear input value from state
    setQuery('');
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      <form onSubmit={onFormSubmit} className={css.form}>
        <input
          placeholder="Enter any phrase for searching"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
          className={css.formInput}
        ></input>
        <button type="submit" className={css.button}>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  setQuery: PropTypes.func,
  query: PropTypes.string,

};