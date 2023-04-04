import useTrends from 'hooks/fetchTrends';
import { Link, useLocation } from 'react-router-dom';
import base from '../../data/api.json';

const TREND_URL = ''.concat(
  base.baseUrl,
  'trending/movie/day?api_key=',
  base.KEY
);

const Home = () => {
  const location = useLocation;

  const { trends, isLoading, error } = useTrends(TREND_URL);

  if (isLoading) {
    //spinner
  }

  if (error) {
    //komunikat
  }

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trends.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
