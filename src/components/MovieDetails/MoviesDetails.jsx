import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getMovie } from '../../service/api';
import Box from '../Box';
import {
  Text,
  H1,
  Title,
  Button,
  Nav,
  Item,
  Ul,
} from '../MovieDetails/MoviesDetails.styled';
import { VscArrowLeft } from 'react-icons/vsc';

export function MoviesDetails({ movieId }) {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  useEffect(() => {
    getMovie(movieId).then(data => setMovies(data));
  }, [movieId]);

  useEffect(() => {
    setPrevPage(location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <Box as="section" p={20}>
      <Box display="flex">
        <>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Button to={prevPage?.state?.from ?? '/'}>
              {console.log('qqq', location)}
              <VscArrowLeft /> &nbsp;Back
            </Button>

            <img
              src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
              alt={movies?.title}
              width={250}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            pl={20}
            pt={30}
            width={600}
          >
            <H1>{movies?.title}</H1>
            <Text>User score: {Math.floor(movies?.vote_average * 10)} %</Text>
            <Title>Overview</Title>
            <Text>{movies?.overview}</Text>
            <Title>Genres</Title>
            <Text>
              {movies?.genres.map(({ name, id }) => (
                <span key={id}>{name} &nbsp;</span>
              ))}
            </Text>
          </Box>
        </>
      </Box>
      <Box pt={20}>
        <Text>Additional information</Text>
        <Ul>
          <Nav>
            <Item to="cast"> Cast</Item>
          </Nav>
          <Nav>
            {' '}
            <Item to="reviews"> Reviews</Item>
          </Nav>
        </Ul>
      </Box>
      <Outlet />
    </Box>
  );
}
