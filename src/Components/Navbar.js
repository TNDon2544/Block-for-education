import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  let search = null;
  if (isSearchOpen) {
    search = <Search closeSearch={() => setIsSearchOpen(false)} />;
  }

  return (
    <Navbar className="nav-position" expand="lg" bg="primary" variant="dark">
      <Container>
        <Link className="navbar-brand mb-0 h1 text-white link-hover" to="/home">
          Block for education
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white link-hover"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white link-hover" to="/createPost">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white link-hover" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <Nav>
            <Button
              variant="outline-light"
              onClick={() => setIsSearchOpen(true)}
              className="search-nav"
            >
              <i className="bi bi-search"></i> Search
            </Button>
            <Link className="nav-link text-white link-hover" to="/">
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {search}
    </Navbar>
  );
}

export default CollapsibleExample;
