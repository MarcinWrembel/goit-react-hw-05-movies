import fetchMovie from 'functions/api';
import { useEffect, useState } from 'react';
import base from '../data/api.json';

const API_KEY = base.KEY;
//process.env.REACT_APP_API_KEY

const useMovieDetails = movie_id => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = ''.concat(
        base.baseUrl,
        'movie/',
        movie_id,
        '?api_key=',
        `${API_KEY}`,
        '&language=en-US'
      );

      try {
        const movieDetails = await fetchMovie(url);

        if (!movie_id) {
          setMovieDetails(null);
          return;
        }

        setMovieDetails(movieDetails.data);

        if (!movieDetails) {
          throw new Error('Getting detailed data is impossible in that moment');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    setError(null);
    setIsLoading(true);
    fetchMovieDetails();
  }, [movie_id]);

  return { isLoading, error, movieDetails };
};

export default useMovieDetails;
