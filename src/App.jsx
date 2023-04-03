import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import NotFound from 'pages/Nothing/NoPage';

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
