import React from "react";
import "../style/Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = ({movie, reloadMovies}) => {
  
  let navigate = useNavigate();
  let {id} = useParams();
  
  const [inputErrorList, setInputErrorList] = useState({});
  const [genreList, setGenreList] = useState([]);
  const [directorList, setDirectorList] = useState([]);
  /*const [movie, setMovie] = useState({
    title: "",
    slug: "",
    release_year: "",
    description: "",
    cast: "",
    image: "",
    genre_id:  "",
    director_id: "",
  });*/

  useEffect(() => {

    axios.get(`http://127.0.0.1:8000/api/genres`).then((res) => {
      console.log(res);
      setGenreList(res.data.genres);
    });

    axios.get(`http://127.0.0.1:8000/api/directors`).then((res) => {
      console.log(res);
      setDirectorList(res.data.directors);
    });
    
    axios.get(`http://127.0.0.1:8000/api/movies/${id}`).then((res) => {
        console.log(res.data.movie);
        setNewMovie(res.data.movie);
    });
    
  }, []);

  const [newMovie, setNewMovie] = useState({
    title: movie != null ? movie.title : "",
    slug: movie != null ? movie.slug : "",
    release_year: movie != null ? movie.release_year : "",
    description: movie != null ? movie.description : "",
    cast: movie != null ? movie.cast : "",
    image: movie != null ? movie.image : "",
    genre_id: movie != null ? movie.genre.id : 1,
    director_id:  movie != null ? movie.director.id : 1,
  })
  /*const newMovie = {
    title: movie != null ? movie.title : "",
    slug: movie != null ? movie.slug : "",
    release_year: movie != null ? movie.release_year : "",
    description: movie != null ? movie.description : "",
    cast: movie != null ? movie.cast : "",
    image: movie != null ? movie.image : "",
    genre_id: movie != null ? movie.genre.id : genres[1].id,
    director_id:  movie != null ? movie.director.id : directors[1].id,
  };*/

  const handleInput = (e) => {
    e.persist();
    setNewMovie({ ...movie, [e.target.name]: e.target.value });
  };

  function handleSelect(e){
    e.persist();
    setNewMovie({ ...movie, [e.target.name]: e.target.selectedIndex });
    
}


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
          //showMessage("Movie updated successfully!", "success", "center", 3000, false);
          navigate("/movies");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
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
                      defaultValue={movie.title}
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
                      defaultValue={movie.slug}
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
                      defaultValue={movie.release_year}
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
                      defaultValue={movie.description}
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
                      defaultValue={movie.cast}
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
                      defaultValue={movie.image}
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
                          defaultValue = {movie == null ? directorList[1].id : movie.director.id}
                          //value={movie.genre.id}
                          //defaultValue={movie.genre.id}
                          //defaultValue = {movie == null ? genres[1].id : movie.genre_id}
                          style={{
                            height: 75 + "px",
                            color: "#edf0f1",
                            marginLeft: 0 + "px",
                            fontSize: 22 + "px",
                            paddingLeft: 25 + "px",
                            backgroundColor: "#161a34",
                          }}
                          onChange={handleSelect}
                        >
                          {genreList == null ? (
                            <></>
                          ) : (
                            genreList.map((genre) => {
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
                          value={movie.director.id}
                          //defaultValue={movie.director.id}
                          //defaultValue = {movie == null ? directors[1].id : movie.director.id}
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
                          {directorList == null ? (
                            <></>
                          ) : (
                            directorList.map((director) => {
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
  );
};

export default EditMovie;
