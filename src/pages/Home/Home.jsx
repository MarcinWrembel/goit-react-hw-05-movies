import css from './Home.module.css';
import useTrends from 'hooks/fetchTrends';
import { Link, useLocation } from 'react-router-dom';
import base from '../../data/api.json';
import Spinner from 'components/spinner/Spinner';


const TREND_URL = ''.concat(
  base.baseUrl,
  'trending/movie/day?api_key=',
  base.KEY
);

const Home = () => {
  const location = useLocation();
  const { trends, isLoading } = useTrends(TREND_URL);

  return (
    <div  className={`${css.container} ${css.home}`}  >
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
