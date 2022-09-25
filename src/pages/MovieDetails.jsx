import { useParams } from 'react-router-dom';
import { MoviesDetails } from '../components/MovieDetails/MoviesDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <main>
      <MoviesDetails movieId={movieId} />
    </main>
  );
};
