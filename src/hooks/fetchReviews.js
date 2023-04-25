import fetchMovie from 'functions/api';
import { useEffect, useState } from 'react';
import base from '../data/api.json';

const apiKey = process.env.REACT_APP_API_KEY

const useMovieReviews = movie_id => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
  //`${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`

  useEffect(() => {
    const fetchMovieReviews = async () => {
      const url = ''.concat(
        base.baseUrl,
        'movie/',
        movie_id,
        '/reviews?api_key=',
        `${apiKey}`,
        '&language=en-US'
      );

      try {
        const movieReviews = await fetchMovie(url);

        if (!movie_id) {
          setMovieReviews(null);
          return;
        }

        setMovieReviews(movieReviews.data.results);

        if (!movieReviews) {
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
    fetchMovieReviews();
  }, [movie_id]);

  return { isLoading, error, movieReviews };
};

export default useMovieReviews;
