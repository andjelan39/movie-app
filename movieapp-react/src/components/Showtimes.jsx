import React from "react";
import "../style/Dashboard.css";
import ShowtimesDataTable from "./ShowtimesDataTable";

const Showtimes = ({
  showtimes,
  getMovieDetails,
  deleteShowtime,
  currentUser,
}) => {
  return (
    <div style={{ width: "78%", marginLeft: "auto", marginRight: "auto", minHeight: 50 + "vh" }}>
      <div className="movies-hero-section">
        <h1>Currently In Cinema</h1>
        <p>All your favourite movies at one place.</p>
      </div>
      <div className="showtimes-tbl">
        <ShowtimesDataTable
          showtimes={showtimes}
          getMovieDetails={getMovieDetails}
          deleteShowtime={deleteShowtime}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
};

export default Showtimes;
