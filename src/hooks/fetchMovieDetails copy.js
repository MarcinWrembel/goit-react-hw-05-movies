import fetchMovie from 'functions/api';
import { useEffect, useState, useCallback } from 'react';
import base from '../data/api.json';

const apiKey = process.env.REACT_APP_API_KEY

const useMovieDetails = movie_id => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = useCallback(async () => {
    const url = ''.concat(
      base.baseUrl,
      'movie/',
      movie_id,
      '?api_key=',
      `${apiKey}`,
      '&language=en-US'
    );

    try {
      const movieDetails = await fetchMovie(url);

      if (!movieDetails) {
        throw new Error('Getting detailed data is impossible in that moment');
      }
      setMovieDetails(movieDetails.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [movie_id]);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return { isLoading, error, movieDetails };
};

export default useMovieDetails;
