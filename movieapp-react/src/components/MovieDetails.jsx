import React from "react";
import "../style/MovieDetails.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaBookmark} from "react-icons/fa"
import {AiFillEdit} from "react-icons/ai"

const MovieDetails = ({ movie }) => {
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
                <button><AiFillEdit/></button>
                <button><FaBookmark/></button>
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
