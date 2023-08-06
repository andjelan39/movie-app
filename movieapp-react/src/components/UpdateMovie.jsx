import React from "react";
import "../style/Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

export const UpdateMovie = ({ reloadMovies, currentUser, genres, directors }) => {
  
  let navigate = useNavigate();
  let { id } = useParams();

  const [inputErrorList, setInputErrorList] = useState({});
  //const [genreList, setGenreList] = useState([]);
  //const [directorList, setDirectorList] = useState([]);
  const [movie, setMovie] = useState({
    title: "",
    slug: "",
    release_year: "",
    description: "",
    cast: "",
    image: "",
    genre_id: "",
    director_id: "",
  });

  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };

  useEffect(() => {
    /*axios.get(`http://127.0.0.1:8000/api/genres`).then((res) => {
      console.log(res);
      setGenreList(res.data.genres);
    });

    axios.get(`http://127.0.0.1:8000/api/directors`).then((res) => {
      console.log(res);
      setDirectorList(res.data.directors);
    });*/

    axios.get(`http://127.0.0.1:8000/api/movies/${id}`).then((res) => {
      console.log(res.data.movie);
      setMovie(res.data.movie);
    });
  }, [id]);

  const handleInput = (e) => {
    e.persist();
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const editMovie = (e) => {
    e.preventDefault();

    var config = {
      method: "put",
      url: "http://127.0.0.1:8000/api/movies/" + movie.id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },

      data: movie,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data.success == true) {
          reloadMovies();
          swal("Success!", "Movie updated successfully!", "success");
          navigate("/movies");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {admin() ? (
        <div className="container">
          <h1>Edit Movie</h1>
          <div className="login d-flex justify-content-center">
            <div className="form_div">
              <div className="row justify-content-center align-items-center inner-row">
                <div className="col-lg-12 col-md-8">
                  <div className="form-box p-md-5 p-3">
                    <form onSubmit={editMovie}>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter movie title"
                          id="title"
                          name="title"
                          value={movie.title}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.title}</span>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Slug
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter movie slug"
                          id="slug"
                          name="slug"
                          value={movie.slug}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.slug}</span>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Release Year
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter release year of the movie"
                          id="release_year"
                          name="release_year"
                          value={movie.release_year}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.release_year}</span>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter movie description"
                          id="description"
                          name="description"
                          value={movie.description}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.description}</span>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Cast
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter movie cast"
                          id="cast"
                          name="cast"
                          value={movie.cast}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.cast}</span>
                      </div>
                      <div className="form-outline form-white mb-2">
                        <label className="bg-transparent" htmlFor="text">
                          Image
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm input_field"
                          placeholder="Enter image URL"
                          id="image"
                          name="image"
                          value={movie.image}
                          style={{ height: 75 + "px", color: "#edf0f1" }}
                          onChange={handleInput}
                        />
                        <span>{inputErrorList.image}</span>
                      </div>
                      <div className="row g-4">
                        <div className="col-6">
                          <div className="mb-2">
                            <label className="bg-transparent" htmlFor="select">
                              Genre
                            </label>
                            <select
                              className="form-control"
                              name="genre_id"
                              value={movie.genre_id}
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
                              {" "}
                              <option
                                disabled={true}
                                value=""
                                style={{
                                  backgroundColor: "#DFDCDF",
                                }}
                              >
                                Select movie genre
                              </option>
                              {genres == null ? (
                                <></>
                              ) : (
                                genres.map((genre) => {
                                  return (
                                    <option
                                      className="mb-1"
                                      value={genre.id}
                                      key={genre.id}
                                      style={{
                                        marginLeft: 20 + "px",
                                        color: "#161a34",
                                        backgroundColor: "#edf0f1",
                                      }}
                                    >
                                      {genre.id} — {genre.name}
                                    </option>
                                  );
                                })
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="mb-2">
                            <label className="bg-transparent" htmlFor="select">
                              Director
                            </label>
                            <select
                              className="form-control"
                              name="director_id"
                              value={movie.director_id}
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
                                Select movie director
                              </option>
                              {directors == null ? (
                                <></>
                              ) : (
                                directors.map((director) => {
                                  return (
                                    <option
                                      className="mb-1"
                                      value={director.id}
                                      key={director.id}
                                      style={{
                                        marginLeft: 20 + "px",
                                        color: "#161a34",
                                        backgroundColor: "#edf0f1",
                                      }}
                                    >
                                      {director.id} — {director.name}
                                    </option>
                                  );
                                })
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button type="submit" name="addBtn">
                          UPDATE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="container d-flex justify-content-center"
            style={{ minHeight: 60 + "vh" }}
          >
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              Only admins have access to this page!
            </h2>
          </div>
        </>
      )}
    </div>
  );
};
