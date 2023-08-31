import React from "react";
import $ from "jquery";
import "../style/Dashboard.css";
import "datatables.net-dt/css/jquery.dataTables.css";
import { Link } from "react-router-dom";

const ShowtimesDataTable = ({
  showtimes,
  getMovieDetails,
  deleteShowtime,
  currentUser,
  token,
}) => {
  $(document).ready(function () {
    $("#tabelaShowtimes").DataTable({
      responsive: true,
      bDestroy: true,
    });
  });

  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };

  var showtimeDetails = "";

  showtimeDetails = showtimes.map((showtime) => {
    return (
      <tr key={showtime.id} className="text-left">
        <td
          style={{
            width: 100 + "px",
            paddingLeft: 20 + "px",
          }}
        >
          <img
            src={`http://127.0.0.1:8000/${showtime.movie.image}`}
            alt={showtime.movie.title}
            style={{
              height: 120 + "px",
              width: 80 + "px",
              border: "solid white",
              borderWidth: 1 + "px",
              borderRadius: 10 + "px",
            }}
          />
        </td>
        <td
          style={{
            width: 220 + "px",
          }}
        >
          <Link
            to={`/movie-details/${showtime.movie.slug}`}
            onClick={() => getMovieDetails(showtime.movie.id)}
          >
            {showtime.movie.title}
          </Link>
        </td>
        <td
          style={{
            width: 20 + "px",
          }}
        >
          {showtime.movie.genre.name}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {showtime.movie.director.name}
        </td>
        <td
          style={{
            width: 350 + "px",
          }}
        >
          {showtime.movie.cast}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {showtime.cinema}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {showtime.st_date}
        </td>
        <td
          style={{
            width: 150 + "px",
          }}
        >
          {showtime.st_time}
        </td>
        {admin() ? (
          <td
            style={{
              width: 120 + "px",
            }}
          >
            <button
              type="button"
              onClick={(e) => deleteShowtime(e, showtime.id)}
              className=""
            >
              Delete
            </button>
          </td>
        ) : (
          <>
          {currentUser != null ? (
            <>
            <td
            style={{
              width: 120 + "px",
            }}
          >
            <Link to={`/showtimes/${showtime.id}`}>
            <button className="">Book</button>
          </Link>
          </td>
            </>
          ) : (
            <>
            <td
            style={{
              width: 120 + "px",
            }}
          >
            <Link to="/login">
            <button>Book</button>
          </Link>
          </td>
            </>
          )}
          </>
          
          )}
      </tr>
    );
  });

  return (
    <div>
      <table className="display align-items-center" id="tabelaShowtimes">
        <thead>
          <tr className="text-left font-medium">
            <th className="px-4 py-2">Photo</th>
            <th className="px-4 py-2">Movie</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Director</th>
            <th className="px-4 py-2">Cast</th>
            <th className="px-4 py-2">Cinema</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>{showtimeDetails}</tbody>
      </table>
    </div>
  );
};

export default ShowtimesDataTable;
