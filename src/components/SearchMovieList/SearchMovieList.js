import { Link } from "react-router-dom";

const SearchMovieList = ({ movies }) => {
  const movieItems = movies.map(movie => {
    return <li key={movie.id}>
    <Link to={`/movies/${movie.id}`} >{movie.title}</Link></li>;
  });

  return <ul>{movieItems}</ul>;
};

export default SearchMovieList;
