import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const handleClick = () => {
    window.location = "/search";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1 text-white" href="/home">
          Block for education
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/post">
                Post
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/profile">
                Profile
              </a>
            </li>
          </ul>
          <div className="search">
            <button
              className="btn btn-outline-light "
              style={{ width: "200px" }}
              type="button"
              onClick={handleClick}
            >
              <i className="bi bi-search"></i> Search
            </button>
          </div>
          <div className="">
            <a className="nav-link text-white" href="/logout">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
