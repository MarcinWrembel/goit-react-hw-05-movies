import useMovieDetails from 'hooks/fetchMovieDetails';
import css from './MovieDetails.module.css';
import { useParams, Outlet, NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import base from '../../data/api.json';
import styled from 'styled-components';
import Spinner from 'components/spinner/Spinner';
import { Suspense } from 'react';

const StyledMovieLink = styled(NavLink)`
  color: black;

  &.active {
    color: white;
  }
`;

const MovieDetails = () => {
  const { movieID } = useParams();
  const { isLoading, error, movieDetails } = useMovieDetails(movieID);
  //   const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  let avg_votes = 0;
  let imgSrc = '';
  let genres = '';

  //   const handleClick = () => {
  //     navigate(-1);
  //   };

  if (error) {
    //error message
  }

  if (movieDetails.genres && movieDetails.poster_path) {
    avg_votes = movieDetails.vote_average.toFixed(2);
    imgSrc = `${base.baseImgPath}/${movieDetails.poster_path}`;
    genres = [...movieDetails.genres].map(genre => genre.name).join(', ');
  }

  return (
    <main className={css.movie}>
      {isLoading && <Spinner />}
      <Link to={backLinkHref} className={css.movieLink}>
        &lt; Go back
      </Link>
      {/* <button onClick={handleClick}> Go back</button> */}
      <div className={css.movieWrapper}>
        <img
          src={imgSrc}
          alt={movieDetails.title}
          className={css.movieImg}
        ></img>
        <div className={css.movieDesc}>
          <h1 className={css.movieDescTitle}>{movieDetails.title}</h1>
          <span className={css.movieDescInfo}>User Score: {avg_votes} </span>
          <h2 className={css.movieDescCategory}>Overview</h2>
          <span className={css.movieDescInfo}>{movieDetails.overview}</span>
          <h2 className={css.movieDescCategory}>Genres</h2>
          <span className={css.movieDescInfo}>{genres}</span>
        </div>
      </div>
      <section className={css.movieOthers}>
        <span>Additional information:</span>
        <ul className={css.movieOthersList}>
          <li className={css.movieOthersListItem}>
            <StyledMovieLink to="cast" className={css.movieOthersListLink}>
              Cast
            </StyledMovieLink>
          </li>
          <li className={css.movieOthersListItem}>
            <StyledMovieLink to="reviews" className={css.movieOthersListLink}>
              Reviews
            </StyledMovieLink>
          </li>
        </ul>
      </section>
      <section>
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </main>
  );
};

export default MovieDetails;
