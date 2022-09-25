import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { NotFound } from '../pages/NotFound';
import { MovieDetails } from '../pages/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Movie Collection
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
