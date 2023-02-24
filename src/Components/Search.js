import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import "./Search.css";

export default function Search(props) {
  const { closeSearch } = props;
  const [searchText, setSearchText] = useState("");
  const filteredPosts = posts.filter((post) => {
    return post.title.includes(searchText);
  });
  const filteredUser = DataUser.filter((user) => {
    return user.userName.includes(searchText);
  });

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  let typeSearch;
  if (searchText === "") {
    typeSearch = (
      <div className="warning-message">
        <h4> Type what you want to search. </h4>
      </div>
    );
  } else if (filteredPosts.length === 0 && filteredUser.length === 0) {
    typeSearch = (
      <div className="warning-message">
        <h4> Not found. </h4>
      </div>
    );
  } else {
    typeSearch = (
      <div>
        <div className="found">
          <h4>{filteredPosts.length} Posts found</h4>
        </div>
        <div className="post-box">
          <div className="band-search">
            {filteredPosts.map((post) => (
              <Link
                className="card-search"
                key={post.postId}
                to={`/home/${post.postId}`}
                onClick={closeSearch}
              >
                <div
                  className="thumb-search"
                  style={{ backgroundImage: `url(${post.thumbUrl})` }}
                />
                <article>
                  <h1 className="title-search">{post.title}</h1>
                  <span className="span-search">
                    {post.userName}
                    <i className="bi bi-suit-heart icon-heart-search">
                      &nbsp;{post.like}
                    </i>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="found">
          <h4>{filteredUser.length} Users found</h4>
        </div>
        <div className="post-box">
          <div className="band-search">
            {filteredUser.map((user) => (
              <Link
                className="card-search"
                key={user.UserId}
                to={`/${user.UserId}`}
                onClick={closeSearch}
              >
                <div
                  className="thumb-search"
                  style={{ backgroundImage: `url(${user.imgUser})` }}
                />
                <article>
                  <h1 className="title-search">{user.userName}</h1>
                  <span className="span-search">
                    {user.Followers} Followers
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="search-popup">
      <div className="search-popup-bg" onClick={closeSearch} />
      <div className="search-popup-card">
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control form-control-lg input-search"
            placeholder="Search"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
        </div>
        {typeSearch}
      </div>
    </div>
  );
}
