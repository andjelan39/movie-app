import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {

  const [token, setToken] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
  }

  function removeToken() {
    setToken(null);
  }

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
        <Route path="/login" element={<Login addToken={addToken}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
