import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchMovieList = ({ movies }) => {
  const location = useLocation();

  const movieItems = movies.map(movie => {
    return (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          {movie.title}
        </Link>
      </li>
    );
  });

  return <ul>{movieItems}</ul>;
};

export default SearchMovieList;
