import React, { useEffect, useState } from "react";
import OneMovie from "./OneMovie";
import "../style/Movies.css";
import $ from "jquery";

const Faves = ({
  movies,
  getMovieDetails,
  currentUser,
  token,
  favouriteMovies,
  addToFaves,
  removeFromFaves,
  userBookings
}) => {
  $(document).ready(function () {
    $("#tableBook").DataTable({
      bDestroy: true,
      columnDefs: [
        {
          defaultContent: "-",
          targets: "_all",
        },
      ],
      buttons: ["copy", "excel", "pdf"],
      data: userBookings,
      columns: [
        { data: "id" },
        { data: "title" },
        { data: "cinema" },
        { data: "st_date" },
        { data: "st_time" },
        { data: "ticket_qty" },
      ],
    });
  });

  return (
    <div className="container">
      <div className="movies-hero-section">
        <h1>My Profile</h1>
        <p>Find all your bookings and favourite movies at one place.</p>
      </div>
      <div>
        <div>
          <table id="tableBook" className="display">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Movie title</th>
                <th>Cinema</th>
                <th>Date</th>
                <th>Time</th>
                <th>Ticket Qty</th>
              </tr>
            </thead>
          </table>
        </div>
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
