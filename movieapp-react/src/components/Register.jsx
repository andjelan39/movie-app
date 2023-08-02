import React from "react";
import "../style/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

const Register = () => {

  let navigate=useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(e) {
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    //console.log(newUserData);
    setUserData(newUserData);
  }

  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/register", userData)
      .then((res) => {
        console.log(res.data);
        swal("Success!", "You registered successfully!", "success");
        navigate("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="container">
      <h1>Create Your Account</h1>
      <div className="login d-flex justify-content-center">
        <div className="form_div">
          <div className="row justify-content-center align-items-center inner-row">
            <div className="col-lg-12 col-md-8">
              <div className="form-box p-md-5 p-3">
                <div className="form-title">
                  <h4 className="mb-3">
                    Register now and indulge in endless entertainment with
                    Flicks!
                  </h4>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" htmlFor="email">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter your name"
                      id="firstName"
                      name="name"
                      style={{ height: 75 + "px", color: "#edf0f1" }}
                      onInput={handleInput}
                    />
                  </div>
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
                    <button type="submit" name="registerBtn">
                      REGISTER
                    </button>
                  </div>
                </form>
                <div className="mt-3">
                  <span>Already have the account?</span>
                  <Link
                    type="button"
                    className="p-2 border-0 bg-transparent"
                    to="/login"
                  >
                    Log In
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

export default Register;
