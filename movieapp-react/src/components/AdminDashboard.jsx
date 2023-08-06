import React from "react";
import "datatables.net-dt/css/jquery.dataTables.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "../style/Dashboard.css";
import { Link } from "react-router-dom";
import MoviesDataTable from "./MoviesDataTable";

const AdminDashboard = ({
  movies,
  deleteMovie,
  currentUser,
  getMovieDetails,
}) => {

  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };
  
  /*$(document).ready(function () {
    $("#table").DataTable({
      responsive: true,
      bDestroy: true,
      columnDefs: [
        {
          defaultContent: "-",
          targets: "_all",
        },
      ],
      buttons: ["copy", "excel", "pdf"],
      data: movies,
      columns: [
        { data: "id", width: 20 },
        { data: "title", width: 120 },
        { data: "slug", width: 80 },
        { data: "release_year", width: 70 },
        { data: "description", width: 450 },
        { data: "cast", width: 150 },
        { data: "genre.name", width: 70 },
        { data: "director.name", width: 150 },
        {
          data: null,
          defaultContent:
            "<div className='admin-btns'><button className='btn'>Update</button><button className='btn3'>Delete</button></div>",
          targets: -1,
          width: 200,
        },
      ],
    });
  });*/

  return (
    <div>
      {admin() ? (
                <div
                className="dashboard-nav"
                style={{ width: "83%", marginLeft: "auto", marginRight: "auto" }}
              >
                <h2>Admin Dashboard</h2>
                <h5>Logged in: {currentUser.name}</h5>
                <div className="button-section d-flex justify-content-between">
                  <div>
                    <Link to="/admin-dashboard">
                      <button className="mb-1" type="button">
                        Movies
                      </button>
                    </Link>
                    <Link to="/movies">
                      <button className="mb-1" type="button">
                        Bookings
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link to="/admin-dashboard/add-movie">
                      <button className="mb-1" type="button">
                        Add Movie
                      </button>
                    </Link>
                  </div>
                </div>
                <hr
                  style={{
                    borderWidth: 2 + "px",
                  }}
                />
                <div className="admin-dsbrd">
                  <MoviesDataTable
                    movies={movies}
                    deleteMovie={deleteMovie}
                    getMovieDetails={getMovieDetails}
                  />
                </div>
                {/*<div className="admin-dsbrd">
                  <div className="dashboard">
                    <table id="table" className="display align-items-center">
                      <thead>
                        <tr>
                          <th id="idZap">ID</th>
                          <th>Title</th>
                          <th>Slug</th>
                          <th>Release Year</th>
                          <th>Description</th>
                          <th>Cast</th>
                          <th>Genre</th>
                          <th>Director</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>*/}
              </div>
              ) : (
                <>
                <div className="container d-flex justify-content-center" style={{minHeight: 60 + "vh"}}>
                  <h2 style={{textAlign: "center", margin: "auto"}}>Only admins have access to this page!</h2>
                </div>
                </>
              )}
    </div>
    
  );
};

export default AdminDashboard;
