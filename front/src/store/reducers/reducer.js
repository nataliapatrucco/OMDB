import { RECEIVE_MOVIES, RECEIVE_MOVIE } from "../actions/movies";
import { GET_USER } from "../actions/users";
import {
  ADD_FAVORITE,
  GET_FAVORITES,
  DELETE_FAVORITE
} from "../actions/favorites";
import { LOG_OUT, LOG_USER } from "../actions/users";

const initialState = {
  movies: [],
  selectedMovie: {},
  favorites: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return { ...state, movies: action.movies };
    case RECEIVE_MOVIE:
      return { ...state, selectedMovie: action.selectedMovie };
    case GET_USER:
      return { ...state, user: action.user };
    case LOG_USER:
      return { ...state, user: action.loggedUser };
    case LOG_OUT:
      return { ...state, user: action.loggedUser };
    case ADD_FAVORITE:
      return { ...state, favorites: action.movie };
    case GET_FAVORITES:
      return { ...state, favorites: action.favorites };
    case DELETE_FAVORITE:
      return { ...state, favorites: action.movie };
    default:
      return state;
  }
};
