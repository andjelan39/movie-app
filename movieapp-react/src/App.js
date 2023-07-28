import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import MovieDetails from "./components/MovieDetails";
import Faves from "./components/Faves";
import FAQ from "./components/FAQ";

function App() {

  const [token, setToken] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
  }

  function removeToken() {
    setToken(null);
    setCurrentUser(null);
  }

  const [users, setUsers] = useState();
  useEffect(() => {
    if (users == null) {
      axios.get("http://127.0.0.1:8000/api/users").then((res) => {
        console.log(res.data);
        setUsers(res.data.users);
      });
    }
  }, [users]);

  const [currentUser, setCurrentUser] = useState();

  function addUser(u) {
    if (users != null) {
      users.map((user) => {
        if (user.email == u.email) {
          setCurrentUser(user);
          console.log(user);
          getFaves();
        }
      });
    }
  }

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies")
      .then((res) => {
        setMovies(res.data.movies);
      })
      .catch((err) => console.log(err));
  }, []);

  const [movieDetails, setMovieDetails] = useState();
  const getMovieDetails = (id) => {
    if (id == null) {
      setMovieDetails(null);
    } else {
      movies.map((movie) => {
        if (movie.id === id) {
          setMovieDetails(movie);
        }
      });
    }
  };

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  function getFaves() {
    var data = currentUser;

    var config = {
      method: "get",
      url: "http://127.0.0.1:8000/api/favmovies",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },

      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFavouriteMovies(response.data.fav_movies);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addToFaves = (id) => {
    console.log(id);

    var data = {
      movie_id: id,
    };

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/favmovies",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },

      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setFavouriteMovies((favouriteMovies) => [
          ...favouriteMovies,
          response.data[1],
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeFromFaves = (id) => {
    let favMovie_id = null;

    if (favouriteMovies != null) {
      favouriteMovies.map((favMovie) => {
        if (favMovie.movie.id == id) {
          favMovie_id = favMovie.id;
        }
      });
    }

    var config = {
      method: "delete",
      url: "http://127.0.0.1:8000/api/favmovies/" + favMovie_id,
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        getFaves();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(3);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = favouriteMovies.slice(firstPostIndex, lastPostIndex);

  const [genres, setGenres] = useState();
  useEffect(() => {
    if (genres == null) {
      axios.get("http://127.0.0.1:8000/api/genres").then((res) => {
        console.log(res.data);
        setGenres(res.data.genres);
      });
    }
  }, [genres]);

  const [directors, setDirectors] = useState();
  useEffect(() => {
    if (directors == null) {
      axios.get("http://127.0.0.1:8000/api/directors").then((res) => {
        console.log(res.data);
        setDirectors(res.data.directors);
      });
    }
  }, [directors]);

  return (
    <BrowserRouter>
      <NavBar
        token={token}
        removeToken={removeToken}
        currentUser={currentUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
              <FAQ />
            </React.Fragment>
          }
        />
        <Route
          path="/login"
          element={<Login addToken={addToken} addUser={addUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/movies"
          element={
            <React.Fragment>
              <Movies
                movies={movies}
                getMovieDetails={getMovieDetails}
                currentUser={currentUser}
                token={token}
                addToFaves={addToFaves}
                removeFromFaves={removeFromFaves}
              />
              {/*<Pagination
                totalPosts={movies.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
          />*/}
            </React.Fragment>
          }
        />
        <Route
          path="/movie-details/:slug"
          element={
            <MovieDetails
              movie={movieDetails}
              currentUser={currentUser}
              token={token}
              favouriteMovies={favouriteMovies}
              favourite={false}
              addToFaves={addToFaves}
              removeFromFaves={removeFromFaves}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            <React.Fragment>
              <Faves
                getMovieDetails={getMovieDetails}
                currentUser={currentUser}
                token={token}
                favouriteMovies={currentPosts}
                addToFaves={addToFaves}
                removeFromFaves={removeFromFaves}
              />
              <Pagination
                totalPosts={favouriteMovies.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </React.Fragment>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
