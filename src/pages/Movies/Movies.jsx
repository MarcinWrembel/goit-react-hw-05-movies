import useSearchMovies from 'hooks/fetchQueryMovies';
import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { useSearchParams } from 'react-router-dom';
import Spinner from 'components/spinner/Spinner';
import css from './Movies.module.css';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchedMovies, error, isLoading } = useSearchMovies(searchQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    updateQueryString(query);
    setSearchQuery(query);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className={css.movies}>
      {isLoading && searchQuery !== '' && <Spinner />}
      <SearchForm onSubmit={handleSubmit} params={searchParams} />
      {searchedMovies && <SearchMovieList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
