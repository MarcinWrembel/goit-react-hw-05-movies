import useMovieDetails from 'hooks/fetchMovieDetails';
import css from './MovieDetails.module.css';
import { useParams, Link } from 'react-router-dom';
import base from '../../data/api.json';

const MovieDetails = () => {
  const { movieID } = useParams();
  const { isLoading, error, movieDetails } = useMovieDetails(movieID);
  let avg_votes = 0;
  let imgSrc = '';
  let genres = '';

  if (movieDetails.genres) {
    avg_votes = movieDetails.vote_average.toFixed(2);
    imgSrc = `${base.baseImgPath}${movieDetails.poster_path}`;
    genres = [...movieDetails.genres].map(genre => genre.name).join(', ');
  }

  if (isLoading) {
    //spinner
  }

  if (error) {
    //error message
    console.log('is loading');
  }

  return (
    <main>
      <button> Go back</button>
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
            <Link to="">Cast</Link>
          </li>
          <li>
            <Link to="">Reviews</Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MovieDetails;
