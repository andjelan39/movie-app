import React from "react";
import OneMovie from "./OneMovie";
import "../style/Movies.css";

const Faves = ({
  movies,
  getMovieDetails,
  currentUser,
  token,
  favouriteMovies,
  addToFaves,
  removeFromFaves,
}) => {
  return (
    <div className="container">
      <div className="movies-hero-section">
        <h1>Favourite Movies</h1>
        <p>All your favourite movies at one place.</p>
      </div>
      <div className="movies">
        <div className="row g-4">
          {favouriteMovies == null ? (
            <></>
          ) : (
            favouriteMovies.map((favMovie) => (
              <OneMovie
                movie={favMovie.movie}
                key={favMovie.id}
                getMovieDetails={getMovieDetails}
                currentUser={currentUser}
                favourite={true}
                addToFaves={addToFaves}
                removeFromFaves={removeFromFaves}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Faves;
