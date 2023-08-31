import React from "react";
import Flicks from "../flickslogo.png";
import "../style/NavBar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { TbLogout } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import $ from "jquery";


const NavBar = ({ token, removeToken, currentUser }) => {
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

  const admin = () => {
    if (currentUser != null) {
      return currentUser.admin;
    } else {
      return false;
    }
  };

  return (
    <div>
      <header>
        <img className="logo" src={Flicks} alt="logo" />

        {token == null ? (
          <>
            <ul className="nav__links">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link to="/in-cinema">In Cinema</Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/register">
                <button>Register</button>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <ul className="nav__links">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link to="/in-cinema">In Cinema</Link>
              </li>
              {/*<li className="nav-item">
                <Link to="/favourites">Favourites</Link>
              </li>
              {admin() ? (
                <li className="nav-item">
                  <Link to="/admin-dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <></>
              )}*/}
            </ul>
            {admin() ? (
              <Link to="/admin-dashboard">
                <button className="logout-btn">
                  <MdAdminPanelSettings />
                </button>
              </Link>
            ) : (
              <></>
            )}
            <Link to="/favourites">
              <button className="logout-btn">
                <BiSolidUser />
              </button>
            </Link>
            <Link to="/" onClick={handleLogout}>
              <button className="logout-btn">
                <TbLogout />
              </button>
            </Link>
          </>
        )}
      </header>
    </div>
  );
};

export default NavBar;
