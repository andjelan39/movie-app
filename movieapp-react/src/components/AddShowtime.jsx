import React from "react";
import "../style/Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AddShowtime = ({ movies, currentUser, reloadShowtimes }) => {
  const [inputErrorList, setInputErrorList] = useState({});
  let navigate = useNavigate();

  const [showtime, setShowtime] = useState({
    movie_id: "",
    cinema: "",
    st_date: "",
    st_time: "",
  });

  const handleInput = (e) => {
    e.persist();
    setShowtime({ ...showtime, [e.target.name]: e.target.value });
  };

  const saveShowtime = (e) => {
    e.preventDefault();

    const newShowtime = {
      movie_id: showtime.movie_id,
      cinema: showtime.cinema,
      st_date: showtime.st_date,
      st_time: showtime.st_time,
    };

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/showtimes",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },

      data: newShowtime,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success == true) {
          reloadShowtimes();
          swal("Success!", "Showtime successfully added!", "success");
          navigate("/movies");
        }
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status == 422) {
            setInputErrorList(error.response.data.errors);
          }
        }
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1>Add Showtime</h1>
      <div className="login d-flex justify-content-center">
        <div className="form_div">
          <div className="row justify-content-center align-items-center inner-row">
            <div className="col-lg-12 col-md-8">
              <div className="form-box p-md-5 p-3">
                <form onSubmit={saveShowtime}>
                <div className="row g-4">
                    <div className="mb-2">
                      <label className="bg-transparent" htmlFor="select">
                        Movie
                      </label>
                      <select
                        type="select"
                        className="form-select"
                        id="movie"
                        name="movie_id"
                        value={showtime.movie_id}
                        style={{
                          height: 75 + "px",
                          color: "#edf0f1",
                          marginLeft: 0 + "px",
                          fontSize: 22 + "px",
                          paddingLeft: 25 + "px",
                          backgroundColor: "#161a34",
                        }}
                        onChange={handleInput}
                      >
                        <option
                          disabled={true}
                          value=""
                          style={{
                            backgroundColor: "#DFDCDF",
                          }}
                        >
                          Select movie
                        </option>
                        {movies == null ? (
                          <></>
                        ) : (
                          movies.map((movie) => {
                            return (
                              <option
                                className="mb-1"
                                value={movie.id}
                                name={movie.id}
                                key={movie.id}
                                style={{
                                  marginLeft: 20 + "px",
                                  color: "#161a34",
                                  backgroundColor: "#edf0f1",
                                }}
                              >
                                {movie.id} — {movie.title}
                              </option>
                            );
                          })
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" htmlFor="text">
                      Cinema
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter cinema"
                      id="cinema"
                      name="cinema"
                      value={showtime.cinema}
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onChange={handleInput}
                    />
                    <span>{inputErrorList.cinema}</span>
                  </div>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" htmlFor="text">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter showtime date"
                      id="st_date"
                      name="st_date"
                      value={showtime.st_date}
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onChange={handleInput}
                    />
                    <span>{inputErrorList.st_date}</span>
                  </div>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" htmlFor="text">
                      Time
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter time"
                      id="st_time"
                      name="st_time"
                      value={showtime.st_time}
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onChange={handleInput}
                    />
                    <span>{inputErrorList.st_time}</span>
                  </div>
                  <div className="mt-3">
                    <button type="submit" name="addBtn">
                      ADD SHOWTIME
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShowtime;
