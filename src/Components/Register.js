import React from "react";

export default function Register() {
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
                <h3 className="mb-4">Register</h3>

                <div className="form-outline mb-4">
                  <input
                    type="name"
                    id="typeNameX-2"
                    className="form-control"
                    style={{ width: "350px" }}
                    placeholder="Name"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control"
                    style={{ width: "350px" }}
                    placeholder="Email"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control "
                    style={{ width: "350px" }}
                    placeholder="Password"
                  />
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control "
                    style={{ width: "350px" }}
                    placeholder="Repeat password"
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block border-0"
                  type="submit"
                  style={{ width: "350px" }}
                >
                  SIGN UP
                </button>

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
                  <i className="bi bi-google"> SIGN IN WITH GOOGLE </i>
                </button>
                <button
                  className="btn btn-lg btn-block btn-primary border-0"
                  style={{ backgroundColor: "#3b5998", width: "350px" }}
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
  );
}
