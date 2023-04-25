import css from './HomePage.module.css';
import useTrends from 'hooks/fetchTrends';
import { Link, useLocation } from 'react-router-dom';
import base from '../../data/api.json';
import Spinner from 'components/spinner/Spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types'

const apiKey = process.env.REACT_APP_API_KEY

const TREND_URL = ''.concat(
  base.baseUrl,
  'trending/movie/day?api_key=',
  `${apiKey}`
);

const Home = () => {
  const location = useLocation();
  const { trends, error, isLoading } = useTrends(TREND_URL);

  if (error) {
    toast.error(error);
  }

  return (
    <div className={`${css.container} ${css.home}`}>
      <h2 className={css.homeHeader}>The most popular movies for today</h2>
      {isLoading && <Spinner />}
      <ul className={css.homeList}>
        {trends.map(el => (
          <li
            key={el.id}
            className={css.homeListItem}
            title="Click on me to see more details"
          >
            <Link
              to={`/movies/${el.id}`}
              state={{ from: location }}
              className={css.homeLink}
            >
              {el.title}
            </Link>
            <span className={css.homeListItemMarker}>◄ </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  trends: PropTypes.array,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  title: PropTypes.string,
};
