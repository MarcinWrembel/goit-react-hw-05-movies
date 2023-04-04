import useSearchMovies from 'hooks/fetchQueryMovies';
import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchedMovies, isLoading, error } = useSearchMovies(searchQuery);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    updateQueryString(query);
    setSearchQuery(query);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  if (isLoading) {
    //spinner dodać
  }

  if (error) {
    //dodać info o błędzie
  }

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} params={searchParams} />

      {searchedMovies && <SearchMovieList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
