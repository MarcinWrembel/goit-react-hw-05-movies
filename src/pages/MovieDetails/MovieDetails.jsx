import useMovieDetails from 'hooks/fetchMovieDetails';
import css from './MovieDetails.module.css';
import { useParams, Outlet, NavLink} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import base from '../../data/api.json';
import styled from 'styled-components';

const StyledMovieLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const MovieDetails = () => {
  const { movieID } = useParams();
  const { isLoading, error, movieDetails } = useMovieDetails(movieID);
//   const navigate = useNavigate();
  const location = useLocation()
  const backLinkHref = location.state?.from ?? "/";

  let avg_votes = 0;
  let imgSrc = '';
  let genres = '';

//   const handleClick = () => {
//     navigate(-1);
//   };

  if (isLoading) {
    //spinner
  }

  if (error) {
    //error message
  }

  if (movieDetails.genres && movieDetails.poster_path) {
    avg_votes = movieDetails.vote_average.toFixed(2);
    imgSrc = `${base.baseImgPath}/${movieDetails.poster_path}`;
    genres = [...movieDetails.genres].map(genre => genre.name).join(', ');
  }

  return (
    <main>
      <Link to={backLinkHref}> Go back</Link>
      {/* <button onClick={handleClick}> Go back</button> */}
      <div className={css.mainWrapper}>
        <img src={imgSrc} alt={movieDetails.title}></img>
        <div>
          <h1>{movieDetails.title}</h1>
          <span>User Score: {avg_votes} </span>
          <h2>Overview</h2>
          <span>{movieDetails.overview}</span>
          <h2>Genres</h2>
          <span>{genres}</span>
        </div>
      </div>
      <section>
        <span>Additional information</span>
        <ul>
          <li>
            <StyledMovieLink to={`cast`}>Cast</StyledMovieLink>
          </li>
          <li>
            <StyledMovieLink to="reviews">Reviews</StyledMovieLink>
          </li>
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetails;
