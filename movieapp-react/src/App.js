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

function App() {
  const [token, setToken] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
  }

  function removeToken() {
    setToken(null);
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

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <BrowserRouter>
      <NavBar token={token} removeToken={removeToken} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header />
            </React.Fragment>
          }
        />
        <Route path="/login" element={<Login addToken={addToken} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/movies"
          element={
            <React.Fragment>
              <Movies movies={currentPosts} />
              <Pagination
                totalPosts={movies.length}
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
