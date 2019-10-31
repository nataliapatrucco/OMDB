import React from "react";
import { Link } from "react-router-dom";

export default function Movies({ movies }) {
  return movies.length ? (
    <div>
      <div className="container-fluid">
        <h2 className="movies row justify-content-center">Movies</h2>
        <div className="row justify-content-center">
          {movies.map(movie => (
            <div key={movie.imdbID} className="col-xs-4">
              <Link className="thumbnail" to={`/movies/${movie.imdbID}`}>
                <img className="img-fluid" src={movie.Poster} />
                <div className="caption">
                  <h5>
                    <span>{movie.Title}</span>
                  </h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
}
