import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const handleClick = () => {
    window.location = "/search";
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1 text-white" to="/home">
          Block for education
        </Link>
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
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/post">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                Profile
              </Link>
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
            <Link className="nav-link text-white" to="/logout">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
