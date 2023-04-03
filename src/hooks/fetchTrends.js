import { useState, useEffect, useCallback } from 'react';
import fetchMovie from 'functions/api';

const useTrends = url => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //useCallback is used here to optimize the performance of the component by memoizing the fetchTrends function
  // and avoiding unnecessary re-renders.
  const fetchTrends = useCallback(async () => {
    try {
      const response = await fetchMovie(url);
      if (!response) {
        throw new Error('Sorry, something went wrong');
      }

      // console.log('trends',response.data);

      setTrends(response.data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchTrends();
  }, [fetchTrends]);

  return { isLoading, error, trends };
};

export default useTrends;
