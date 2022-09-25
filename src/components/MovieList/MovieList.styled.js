import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 20px;
  padding-left: 40px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-align: center;
`;
export const Img = styled.img`
  width: 278px;
  height: 160px;
`;
