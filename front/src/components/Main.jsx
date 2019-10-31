import React, { Component } from "react";
import RouteHook from "react-route-hook";
import { Switch, Route } from "react-router-dom";
import store from "../store/store";
import Footer from "../components/Footer";
import MoviesContainer from "../containers/MoviesContainer";
import MovieContainer from "../containers/MovieContainer";
import SignUpContainer from "../containers/SignUpContainer";
import LoginContainer from "../containers/LoginContainer";
import NavbarContainer from "../containers/NavbarContainer";
import FavoritesContainer from "../containers/FavoritesContainer";
import { connect } from "react-redux";
import { fetchMovie } from "../store/actions/movies";
import { fetchFavorite } from "../store/actions/favorites";

const onMovieEnter = ({ match }) => store.dispatch(fetchMovie(match.params.id));
const onFavEnter = ({ match }) =>
  store.dispatch(fetchFavorite(match.params.id));

class Main extends Component {
  render() {
    return (
      <div id="main container-fluid">
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={MoviesContainer} />

          <RouteHook
            path="/movies/:id"
            onEnter={onMovieEnter}
            component={MovieContainer}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return <SignUpContainer history={this.props.history} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return <LoginContainer history={this.props.history} />;
            }}
          />
          <RouteHook
            path="/favorites"
            onEnter={onFavEnter}
            component={FavoritesContainer}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Main);
