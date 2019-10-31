import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";

const addMovieToFavorites = movie => ({
  type: ADD_FAVORITE,
  movie
});

const deleteMovieFavorite = movie => ({
  type: DELETE_FAVORITE,
  movie
});

const getFavorites = favorites => ({
  type: GET_FAVORITES,
  favorites
});

export const fetchFavorites = movie => dispatch => {
  axios
    .post("/api/addFav", movie)
    .then(res => res.data)
    .then(movie => dispatch(addMovieToFavorites(movie)));
};

export const fetchFavorite = () => dispatch =>
  axios
    .get("/api/favorites/")
    .then(res => res.data)
    .then(favoriteList => dispatch(getFavorites(favoriteList)));

// export const deleteFavorite = movieId => dispatch => {
//   return axios
//     .post(`/api/movies/${movieId}`)
//     .then(res => res.data)
//     .then(movie => dispatch(deleteMovieFavorite(movie)));
// };
