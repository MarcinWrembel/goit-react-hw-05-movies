import useSearchMovies from 'hooks/fetchQueryMovies';
import { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchedMovies, isLoading, error } = useSearchMovies(searchQuery);

  const handleSubmit = query => {
    setSearchQuery(query);
  };

  if (isLoading) {
    //spinner dodać
    console.log('is loading');
  }

  if (error) {
    //dodać info o błędzie
    console.log('coś nie tak')
  }

  console.log(searchedMovies);

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />

      {searchedMovies && <SearchMovieList movies={searchedMovies} />}
    </div>
  );
};

export default Movies;
