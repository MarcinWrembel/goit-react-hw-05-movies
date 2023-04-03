import fetchMovie from 'functions/api';
import { useEffect, useState} from 'react';
import base from '../data/api.json';

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
        base.KEY,
        '&language=en-US'
      );

      try {
        const movieDetails = await fetchMovie(url);

        console.log(movieDetails);

        if (!movie_id) {
          setMovieDetails(null);
          return;
        }

        setMovieDetails(movieDetails.data);
        console.log(movieDetails.data);

        if (!movieDetails) {
          throw new Error('Getting detailed data is impossible in that moment');
        }
      } catch (error) {
        setError(error.mesage);
      } finally {
        setIsLoading(false);
      }
    };

    setError(null);
    setIsLoading(true);
    fetchMovieDetails();

    // const delay = setTimeout(() => {
    //   fetchMovieDetails();
    // }, 500);

    // return () => {
    //   clearTimeout(delay);
    // };
  }, [movie_id]);

  return { isLoading, error, movieDetails };
};

export default useMovieDetails;
