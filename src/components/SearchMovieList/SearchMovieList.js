import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import css from '../../pages/Home/Home.module.css';

const SearchMovieList = ({ movies }) => {
  const location = useLocation();

  const movieItems = movies.map(movie => {
    return (
      <li key={movie.id} className={css.homeListItem}>
        <Link
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          className={css.homeLink}
        >
          {movie.title}
        </Link>
        <span className={css.homeListItemMarker}>◄ </span>
      </li>
    );
  });

  return (
    <div className={`${css.container} ${css.home}`}>
      <h2 className={css.homeHeader}>
        {movies.length > 1
          ? 'Movie results:'
          : 'Please enter any phrase to find movies'}
      </h2>
      <ul className={css.homeList}>{movieItems}</ul>
    </div>
  );
};

export default SearchMovieList;
