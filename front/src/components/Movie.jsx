import React from "react";

export default function Movie({ movie, fetchFavorites }) {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <button className="btn btn-default text-light">
                Go Back To Search
              </button>
              <button
                type="button"
                onClick={() => fetchFavorites(movie)}
                className="btn btn-default text-light"
              >
                Add to Favorites
              </button>
              {/* <button
                type="button"
                onClick={() => deleteFavorite(movie)}
                className="btn btn-default text-light"
              >
                Delete from Favorites
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
