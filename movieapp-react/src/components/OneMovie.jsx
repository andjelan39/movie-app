import React from "react";
import "../style/Movies.css";
import Blade from "../img/bladerunner.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OneMovie = ({ movie }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img
          src={`http://127.0.0.1:8000/${movie.image}`}
          className="card-img"
          alt={movie.title}
        />
        <div className="card-body">
          <h1 className="card-title">{movie.title}</h1>
          <p className="card-sub-title">Director: {movie.director.name}</p>
          <p className="card-sub-title">Cast: {movie.cast}</p>
          <p className="card-info">{movie.description}</p>
          <button className="card-btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
