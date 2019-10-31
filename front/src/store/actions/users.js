import axios from "axios";
export const GET_USER = "GET_USER";
export const LOG_USER = "LOG_USER";
export const LOG_OUT = "LOG_OUT";

const getUser = user => ({
  type: GET_USER,
  user
});
const logUser = loggedUser => ({
  type: LOG_USER,
  loggedUser
});

const logout = loggedUser => ({
  type: LOG_OUT,
  loggedUser
});

export const fetchUser = user => dispatch =>
  axios.get("/api/me").then(user => dispatch(getUser(user)));

export const loguser = user => dispatch =>
  axios
    .post("/api/login")
    .then(res => res.data)
    .then(user => dispatch(logUser(user.data)));

export const logOut = () => dispatch => {
  axios
    .get("/api/logout")
    .then(res => res.data)
    .then(user => {
      dispatch(logUser(""));
    });
};
