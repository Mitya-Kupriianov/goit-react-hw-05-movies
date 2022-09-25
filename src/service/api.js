import axios from 'axios';

const BASIC_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '560822a19444f5fe2deeb827c6565925';

//page Home
export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(
      `${BASIC_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}

//page MovieDetails
export async function getMovie(movieId) {
  try {
    const response = await axios.get(
      `${BASIC_URL}movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
}

//page Movies
export async function searchMovies(query) {
  try {
    const response = await axios.get(
      `${BASIC_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}

//page Cast
export async function getCast(movieId) {
  try {
    const response = await axios.get(
      `${BASIC_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (err) {
    console.error(err.message);
  }
}

//page Reviews
export async function getReviews(movieId) {
  try {
    const response = await axios.get(
      `${BASIC_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (err) {
    console.error(err.message);
  }
}
