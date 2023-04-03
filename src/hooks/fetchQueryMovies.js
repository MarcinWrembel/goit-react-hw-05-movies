import { useState, useEffect } from 'react';
import fetchMovie from 'functions/api';
import base from '../data/api.json';

const useSearchMovies = query => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const queryURL = ''.concat(
        base.baseUrl,
        'search/movie?api_key=',
        base.KEY,
        '&language=en-US&page=1&include_adult=false&query=',
        query
      );

      //run update if query is not empty
      if (!query) {
        setSearchedMovies([]);
        return;
      }

      try {
        const response = await fetchMovie(queryURL);
        if (!response) {
          throw new Error('Sorry, something went wrong');
        }

        setSearchedMovies(response.data.results);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    setError(null);

    const debounceForSearchingMovies = setTimeout(() => {
      fetchSearchedMovies();
    }, 500);

    return () => {
      clearTimeout(debounceForSearchingMovies);
    };
  }, [query]);

  return { isLoading, error, searchedMovies };
};

export default useSearchMovies;
