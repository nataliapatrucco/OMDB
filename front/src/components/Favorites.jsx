import { Link } from "react-router-dom";
import React from "react";

export default function Favorites({ favorites }) {
  return (
    <div>
      <div className="container-fluid">
        <h2 className="movies row justify-content-center">Favorites</h2>
        <div className="row justify-content-center">
          {favorites.map(favorite => (
            <div key={favorite.imdbID} className="col-xs-4">
              <Link to={`/movies/${favorite.imdbID}`}>
                <img className="img-fluid" src={favorite.Poster} />
                <h3>{favorite.Title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
