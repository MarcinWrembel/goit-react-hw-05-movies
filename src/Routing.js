import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/home/Home'));
const Movies = lazy(() => import('./pages/movies/Movies'));
const MovieDetails = lazy(() => import('./pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./pages/movieDetails/cast/Cast'));
const Reviews = lazy(() => import('./pages/movieDetails/reviews/Reviews'));
const NotFound = lazy(() => import('./pages/notFoundPage/NotFound'));

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieID/*" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
