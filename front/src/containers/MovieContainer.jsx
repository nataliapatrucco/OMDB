import React, { Component } from "react";
import Movie from "../components/Movie";
import { connect } from "react-redux";
import { fetchMovie } from "../store/actions/movies";
import { fetchFavorites } from "../store/actions/favorites";
import { deleteFavorite } from "../store/actions/favorites";

class MovieContainer extends Component {
  render() {
    return (
      <div>
        <Movie
          movie={this.props.selectedMovie}
          fetchFavorites={this.props.fetchFavorites}
          // deleteFavorite={this.props.deleteFavorite}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMovie,
  fetchFavorites
  // deleteFavorite
};
const mapStateToProps = state => ({
  selectedMovie: state.selectedMovie,
  favorites: state.favorites
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
