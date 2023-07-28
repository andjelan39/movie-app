import React from "react";
import "../style/Movies.css";
import OneMovie from "./OneMovie";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Movies = ({
  movies,
  getMovieDetails,
  currentUser,
  token,
  addToFaves,
  removeFromFaves,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  function admin() {
    if (token != null) {
      return currentUser.admin;
    }
  }

  const [sorting, setSorting] = useState("none");

  function handleSort(e) {
    console.log(e.target.value);
    setSorting(e.target.value);
  }

  return (
    <div className="container">
      <div className="movies-hero-section">
        <h1>Movies</h1>
        <p>
          Grab your popcorn, settle into your favorite spot, and let our
          streaming app be your gateway to a world of extraordinary stories.
          Whether you're a film connoisseur or a casual viewer, get ready to be
          enchanted by the magic of movies on our platform. With high-definition
          streaming and user-friendly navigation, you can easily browse, filter,
          and enjoy your favorite movies on any device, anytime, and anywhere.
          Start exploring now and let the cinematic adventure begin!
        </p>
      </div>
      <div className="filters">
        <div className="filter-by"></div>
        {/*<div className="button-section">
          <Link to="/movies">
            <button className="mb-1" type="button">
              All
            </button>
          </Link>
          {genres == null ? (
            <></>
          ) : (
            genres.map((genre) => (
              <button
                className="mb-1"
                type="button"
                key={genre.id}
                style={{
                  marginLeft: 20 + "px",
                }}
              >
                <Link
                  to={`/movies/${genre.slug}`}
                  onClick={() => getGenres(genre.id)}
                  style={{
                    textTransform: "capitalize",
                    fontWeight: 300,
                    fontSize: 17 + "px",
                    color: "#edf0f1",
                  }}
                >
                  {genre.name}
                </Link>
              </button>
            ))
          )}
          <hr
            style={{
              borderWidth: 3 + "px",
            }}
          />
          </div>*/}
      </div>
      <div className="row g-4 d-flex justify-content-between">
        <div className="dropdown button-section col-6 col-md-5 align-middle">
          <select className="sort" onChange={handleSort}>
            <option
              value="none"
              style={{
                background: "transparent",
                borderWidth: 0 + "px",
                padding: 10 + "px",
                color: "#0E1027",
                cursor: "pointer",
              }}
            >
              Sort by:
            </option>
            <option
              value="asc"
              style={{
                background: "transparent",
                borderWidth: 0 + "px",
                padding: 10 + "px",
                color: "#0E1027",
                cursor: "pointer",
              }}
            >
              Sort by: Title A-Z
            </option>
            <option
              value="desc"
              style={{
                background: "transparent",
                borderWidth: 0 + "px",
                padding: 10 + "px",
                color: "#0E1027",
                cursor: "pointer",
              }}
            >
              Sort by: Title Z-A
            </option>
          </select>
        </div>
        <div className="col-6 col-md-5 d-flex justify-content-end">
          <div className="box">
            <div className="search-box">
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <button className="icon">
                <BsSearch />
              </button>
            </div>
          </div>
        </div>
        <hr
          style={{
            borderWidth: 3 + "px",
          }}
        />
      </div>
      <div className="movies">
        <div className="row g-4">
          {sorting == "asc"
            ? movies
                .sort((a, b) => (a.title < b.title ? -1 : 1))
                .filter((movie) => {
                  if (searchTerm == "") {
                    return movie;
                  } else if (
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return movie;
                  }
                })
                .map((movie) => (
                  <OneMovie
                    movie={movie}
                    key={movie.id}
                    getMovieDetails={getMovieDetails}
                    currentUser={currentUser}
                    favourite={false}
                    addToFaves={addToFaves}
                    removeFromFaves={removeFromFaves}
                  />
                ))
            : sorting == "desc"
            ? movies
                .sort((a, b) => (a.title < b.title ? 1 : -1))
                .filter((movie) => {
                  if (searchTerm == "") {
                    return movie;
                  } else if (
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return movie;
                  }
                })
                .map((movie) => (
                  <OneMovie
                    movie={movie}
                    key={movie.id}
                    getMovieDetails={getMovieDetails}
                    currentUser={currentUser}
                    favourite={false}
                    addToFaves={addToFaves}
                    removeFromFaves={removeFromFaves}
                  />
                ))
            : movies
                .filter((movie) => {
                  if (searchTerm == "") {
                    return movie;
                  } else if (
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return movie;
                  }
                })
                .map((movie) => (
                  <OneMovie
                    movie={movie}
                    key={movie.id}
                    getMovieDetails={getMovieDetails}
                    currentUser={currentUser}
                    favourite={false}
                    addToFaves={addToFaves}
                    removeFromFaves={removeFromFaves}
                  />
                ))}
          {/* {movies == null ? (
            <></>
          ) : (
            movies.map((movie) => (
              <OneMovie
                movie={movie}
                key={movie.id}
                getMovieDetails={getMovieDetails}
                currentUser={currentUser}
                favourite={false}
                addToFaves={addToFaves}
                removeFromFaves={removeFromFaves}
              />
            ))
            )}*/}
        </div>
      </div>
    </div>
  );
};

export default Movies;
