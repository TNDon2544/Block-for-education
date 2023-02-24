import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Search from "./Search";
import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataUser from "../Data/DataUser";
import CreatePost from "./CreatePost";

function CollapsibleExample() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  let search = null;
  if (isSearchOpen) {
    search = <Search closeSearch={() => setIsSearchOpen(false)} />;
  }

  let createPost = null;
  if (isCreatePostOpen) {
    createPost = <CreatePost closeCreatePost={() => setIsCreatePostOpen(false)} />;
  }

  const UserProfile = DataUser.find(
    (profile) => profile.userName === "Thanadon Pongjessada"
  );

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
              <Link className="nav-link text-white link-hover" onClick={() => setIsCreatePostOpen(true)}>
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white link-hover" to={`/${UserProfile.UserId}`}>
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
      {createPost}
    </Navbar>
  );
}

export default CollapsibleExample;
