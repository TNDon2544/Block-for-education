import React from "react";

export default function Login() {
  return (
    <section style={{ backgroundColor: "#508bfc", height: "100%" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-4">Sign in</h3>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    style={{ width: "350px" }}
                    placeholder="Email"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    style={{ width: "350px" }}
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
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="/forgotpass" style={{ textDecoration: "none" }}>
                    Forgot password?
                  </a>
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block border-0"
                  type="submit"
                  style={{ width: "350px" }}
                >
                  Login
                </button>

                <p className="small mt-1 pt-1">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    className="link-danger"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </a>
                </p>

                <div className="d-flex align-items-center my-4">
                  <div
                    style={{ borderTop: "1px solid #e9e9e9", width: "40%" }}
                  />
                  <span className="text-center fw-bold text-muted align-self-center mx-3">
                    OR
                  </span>
                  <div
                    style={{ borderTop: "1px solid #e9e9e9", width: "40%" }}
                  />
                </div>

                <button
                  className="btn btn-lg btn-block btn-primary mb-2 border-0"
                  style={{ backgroundColor: "#dd4b39", width: "350px" }}
                  type="submit"
                >
                  <i className="bi bi-google"> Sign in with google</i>
                </button>
                <button
                  className="btn btn-lg btn-block btn-primary border-0"
                  style={{ backgroundColor: "#3b5998", width: "350px" }}
                  type="submit"
                >
                  <i className="bi bi-facebook"> Sign in with facebook</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
