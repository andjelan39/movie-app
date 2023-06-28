import React from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login = ({addToken}) => {

  let navigate=useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    //console.log(newUserData);
    setUserData(newUserData);
  }

  function handleLogin(e) {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/login", userData)
      .then((res) => {
        console.log(res.data);

        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          console.log(res.data);
          addToken(res.data.access_token);
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });

  }

  return (
    <div className="container">
      <h1>Log Into Your Account</h1>
      <div className="login d-flex justify-content-center">
        <div className="form_div">
          <div className="row justify-content-center align-items-center inner-row">
            <div className="col-lg-12 col-md-8">
              <div className="form-box p-md-5 p-3">
                <div className="form-title">
                  <h4 className="mb-3">Have Flicks account? Log In</h4>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter your email"
                      id="email"
                      name="email"
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onInput={handleInput}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onInput={handleInput}
                    />
                  </div>
                  <div className="mt-3">
                    <button type="submit" name="loginBtn">
                      LOGIN
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <span>Don't have the account?</span>
                  <Link to="/register" className="p-2 border-0 bg-transparent">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
