import React from "react";
import "../style/Movies.css";
import OneMovie from "./OneMovie";
import axios from "axios";
import { useState, useEffect } from "react";

const Movies = ({ movies, getMovieDetails }) => {
  /*const [movies, setMovies] = useState();
  useEffect(() => {
    if (movies == null) {
      axios.get("http://127.0.0.1:8000/api/movies").then((res) => {
        console.log(res.data);
        setMovies(res.data.movies);
      });
    }
  }, [movies]);*/

  return (
    <div className="container">
      <div className="movies">
        <div className="row g-4">
          {movies == null ? (
            <></>
          ) : (
            movies.map((movie) => (
              <OneMovie
                movie={movie}
                key={movie.id}
                getMovieDetails={getMovieDetails}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
