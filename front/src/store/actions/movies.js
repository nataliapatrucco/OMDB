import axios from "axios";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";

const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies: movies
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  selectedMovie: movie
});

export const fetchMovies = movies => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies.Search)));

export const fetchMovie = id => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));
