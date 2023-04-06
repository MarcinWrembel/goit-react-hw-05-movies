import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/homePage/HomePage'));
const Movies = lazy(() => import('./pages/moviesPage/Movies'));
const MovieDetails = lazy(() => import('./pages/movieDetailsPage/MovieDetails'));
const Cast = lazy(() => import('./pages/movieDetailsPage/cast/Cast'));
const Reviews = lazy(() => import('./pages/movieDetailsPage/reviews/Reviews'));
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
