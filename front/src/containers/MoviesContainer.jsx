import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import Movies from "../components/Movies";
import { connect } from "react-redux";

class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <Movies movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(
  mapStateToProps,
  {}
)(MoviesContainer);
