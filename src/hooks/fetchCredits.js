import fetchMovie from 'functions/api';
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import base from '../data/api.json';

const API_KEY = base.KEY;
//process.env.REACT_APP_API_KEY

const useCredits = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieID } = useParams();

  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

  const getCredits = useCallback(async () => {
    const url = ''.concat(
      base.baseUrl,
      'movie/',
      movieID,
      '/credits?api_key=',
      `${API_KEY}`,
      '&language=en-US'
    );

    try {
      const credits = await fetchMovie(url);

      if (!credits) {
        throw new Error('Sorry, something went wrong');
      }

      setCredits(credits.data.cast);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [movieID]);

  useEffect(() => {
    //reset initial values
    setError(null);
    setIsLoading(true);
    //invoking fetch function for credits
    getCredits();
  }, [getCredits]);

  return { credits, isLoading, error };
};

export default useCredits;
