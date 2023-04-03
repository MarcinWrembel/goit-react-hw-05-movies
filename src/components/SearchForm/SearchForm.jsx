// import useSearchMovies from 'hooks/fetchQueryMovies';
import { useState } from 'react';

const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

//   const { searchedMovies, isLoading, error } = useSearchMovies(searchQuery);

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(query)
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };



  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          placeholder="Enter any phrase for searching"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          onChange={handleChange}
        ></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
