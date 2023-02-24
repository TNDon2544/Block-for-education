import React from "react";
import { Link } from "react-router-dom";
import "./Login-Register.css";

export default function Login() {
  return (
    <div>
      <section className="section">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card  card-border shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>

                  <div className="d-flex justify-content-center form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg input"
                      placeholder="Email"
                    />
                  </div>

                  <div className="d-flex justify-content-center  form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg input"
                      placeholder="Password"
                    />
                  </div>

                  <div className="d-flex justify-content-around align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <a href="/" className="link">
                      Forgot password?
                    </a>
                  </div>
                  <Link to="/home">
                    <button
                      className="btn btn-primary btn-lg btn-block border-0 btn-login"
                      type="submit"
                    >
                      LOGIN
                    </button>
                  </Link>
                  <p className="small mt-1 pt-1">
                    Don't have an account?{" "}
                    <Link to="/register" className="link link-danger">
                      Register
                    </Link>
                  </p>

                  <div className="d-flex align-items-center my-4 ">
                    <div className="line-or" />
                    <span className="text-center fw-bold text-muted align-self-center mx-3">
                      OR
                    </span>
                    <div className="line-or" />
                  </div>

                  <button
                    className="btn btn-lg btn-block btn-primary mb-2 border-0 btn-google"
                    type="submit"
                  >
                    <i className="bi bi-google"> SIGN IN WITH GOOGLE</i>
                  </button>
                  <button
                    className="btn btn-lg btn-block btn-primary border-0 btn-facebook"
                    type="submit"
                  >
                    <i className="bi bi-facebook"> SIGN IN WITH FACEBOOK</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
