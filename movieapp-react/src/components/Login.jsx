import React from "react";
import "../style/Login.css";

function Login() {
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
                <form>
                  <div className="form-outline form-white mb-2">
                    <label className="bg-transparent" for="email">Email</label>
                    <input
                      type="email"
                      class="form-control form-control-sm input_field"
                      placeholder="Enter your email"
                      id="email"
                      name="email"
                      style={{height:75+"px", color:"#edf0f1"}}
                    />
                  </div>
                  <div className="form-outline form-white mb-4">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-sm input_field"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      style={{height:75+"px", color:"#edf0f1"}}
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
                  <a
                    type="button"
                    className="p-2 border-0 bg-transparent"
                    href="#"
                  >Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
