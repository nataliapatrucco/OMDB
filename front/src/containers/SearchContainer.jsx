import React, { Component } from "react";
import { fetchMovies } from "../store/actions/movies";
import { connect } from "react-redux";
import Search from "../components/Search";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.movies(this.state.text);
  }
  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  movies: text => dispatch(fetchMovies(text))
});
const mapStateToProps = state => ({
  movies: state.movies
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
