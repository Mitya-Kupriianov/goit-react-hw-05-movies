import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../service/api';
import Box from '../Box';
import { Ul, Item, Title, Text } from './Cast.styled';
import { AiOutlineStop } from 'react-icons/ai';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <Box>
      <Ul>
        {cast.map(({ name, id, character, profile_path }) => (
          <Item key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
                width={200}
              />
            ) : (
              <AiOutlineStop size="100px" />
            )}
            <Title>{name}</Title>
            <Text>Character: {character}</Text>
          </Item>
        ))}
      </Ul>
    </Box>
  );
};
export default Cast;
