import React from "react";
import Flicks from "../flickslogo.png";
import "../style/NavBar.css";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = ({token, removeToken}) => {

  function handleLogout() {

    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/logout",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
        removeToken();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <header>
        <link rel="stylesheet" href="NavBar.css" />
        <img className="logo" src={Flicks} alt="logo" />
        <nav>
          <ul className="nav__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        {token == null ? (
          <Link to="/login">
            <button>Login</button>
          </Link>
        ) : (
          <Link to="/" onClick={handleLogout}>
            <button>Logout</button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default NavBar;
