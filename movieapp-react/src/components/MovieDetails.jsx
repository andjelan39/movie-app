import React from "react";
import "../style/MovieDetails.css";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const MovieDetails = ({
  movie,
  currentUser,
  favouriteMovies,
  favourite,
  removeFromFaves,
  addToFaves,
  token,
}) => {
  
  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };

  if (favouriteMovies != null) {
    favouriteMovies.map((favMovie) => {
      if (favMovie.movie != null && favMovie.movie.id == movie.id) {
        favourite = true;
      }
    });
  }

  function addToFavourites() {
    if (currentUser != null) {
      addToFaves(movie.id);
    } else {
    }
  }

  function removeFromFavourites() {
    removeFromFaves(movie.id);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="details-wrapper row g-0">
          <div className="col-6 col-md-5">
            <img
              src={`http://127.0.0.1:8000/${movie.image}`}
              className="details-img"
              alt={movie.title}
            />
          </div>
          <div className="col-6 col-md-7 details-txt">
            <div className="details-header d-flex justify-content-between">
              <div>
                <h1>{movie.title}</h1>
              </div>
              <div className="add-to-fav">
                {token == null ? (
                  <>
                    <Link to="/login">
                      <button>
                        <FaRegBookmark />
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    {admin() ? (
                      <>
                        <button>
                          <AiFillEdit />
                        </button>
                        {favourite ? (
                          <button onClick={removeFromFavourites}>
                            <FaBookmark />
                          </button>
                        ) : (
                          <button onClick={addToFavourites}>
                            <FaRegBookmark />
                          </button>
                        )}
                      </>
                    ) : (
                      <>
                        {favourite ? (
                          <button onClick={removeFromFavourites}>
                            <FaBookmark />
                          </button>
                        ) : (
                          <button onClick={addToFavourites}>
                            <FaRegBookmark />
                          </button>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <span>{movie.genre.name}</span>
            <div className="details-txt-info">
              <p className="details-txt-subtitle">
                Release year: {movie.release_year}
              </p>
              <p className="details-txt-subtitle">
                Director: {movie.director.name}
              </p>
              <div className="details-txt-desc">
                <p>Description: {movie.description}</p>
              </div>
              <p className="details-txt-subtitle">Cast: {movie.cast}</p>
            </div>
            <p className="details-txt-footer">
              Stream now on Flicks or book to watch in our cinema.
            </p>
            <div className="details-buttons">
              <button name="watch-btn">WATCH</button>
              <button name="watch-btn">BOOK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
