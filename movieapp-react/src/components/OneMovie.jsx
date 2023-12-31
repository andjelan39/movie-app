import React from "react";
import "../style/Movies.css";
import {Link} from "react-router-dom";

const OneMovie = ({ movie, getMovieDetails, currentUser, favouriteMovies, favourite, removeFromFaves, addToFaves}) => {

  const admin = () =>{
    if(currentUser != null){
      return currentUser.admin;
     }else{
       return false;
     }
  }

  if(favouriteMovies != null){
    favouriteMovies.map((favMovie) =>{
      if(favMovie.movie != null && favMovie.movie.id == movie.id){
        favourite = true;
      }
    })
  };

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
          <Link to={`/movie-details/${movie.slug}`} onClick={()=> getMovieDetails(movie.id)}><button className="card-btn">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default OneMovie;
