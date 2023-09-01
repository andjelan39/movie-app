import React from "react";
import $ from "jquery";
import "../style/Dashboard.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Link } from "react-router-dom";

const MoviesDataTable = ({ movies, deleteMovie, getMovieDetails }) => {
  $(document).ready(function () {
    $("#tabela").DataTable({
      responsive: true,
      bDestroy: true,
    });
  });

  var movieDetails = "";

  movieDetails = movies.map((movie) => {
    return (
      <tr key={movie.id} className="text-left">
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {movie.id}
        </td>
        <td
          style={{
            width: 120 + "px",
          }}
        >
          <Link
            to={`/movie-details/${movie.slug}`}
            onClick={() => getMovieDetails(movie.id)}
          >
            {movie.title}
          </Link>
        </td>
        <td
          style={{
            width: 80 + "px",
          }}
        >
          {movie.slug}
        </td>
        <td
          style={{
            width: 70 + "px",
          }}
        >
          {movie.release_year}
        </td>
        <td
          style={{
            width: 450 + "px",
          }}
        >
          {movie.description}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {movie.cast}
        </td>
        <td
          style={{
            width: 70 + "px",
          }}
        >
          {movie.genre.name}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {movie.director.name}
        </td>
        <td
          style={{
            width: 200 + "px",
          }}
        >
          <Link to={`/movies/${movie.id}/edit-movie`}>
            <button className="">Edit</button>
          </Link>
          <button
            type="button"
            onClick={(e) => deleteMovie(e, movie.id)}
            className=""
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div style={{ minHeight: 50 + "vh" }}>
      <table className="display align-items-center" id="tabela">
        <thead>
          <tr className="text-left font-medium">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Slug</th>
            <th className="px-4 py-2">Release Year</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Cast</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Director</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>{movieDetails}</tbody>
      </table>
    </div>
  );
};

export default MoviesDataTable;
