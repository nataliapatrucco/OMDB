import React, { Component } from "react";
import Favorites from "../components/Favorites";
import { connect } from "react-redux";
import { fetchFavorite } from "../store/actions/favorites";
import { deleteFavorite } from "../store/actions/favorites";

class FavoritesContainer extends Component {
  render() {
    return (
      <div>
        <Favorites
          favorites={this.props.favorites}
          // deleteFavorite={this.props.deleteFavorite}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

const mapDispatchToProps = {
  fetchFavorite
  // deleteFavorite
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesContainer);
