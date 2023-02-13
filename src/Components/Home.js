import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home(props) {
  const { post, onPostClick } = props;
  return (
    <Link className="card" onClick={( ) => {onPostClick(post)}}>
      <div
        className="thumb"
        style={{ backgroundImage: `url(${post.thumbUrl})` }}
      />
      <article>
        <h1 className="title">{post.title}</h1>
        <span>
          {post.userName}
          <i className="bi bi-suit-heart icon-heart">&nbsp;{post.like}</i>
        </span>
      </article>
    </Link>
  );
}
