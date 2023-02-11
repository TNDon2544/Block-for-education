import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home(props) {
  const { post } = props;
  return (
    <Link className="card" to="/home">
      <div
        className="thumb"
        style={{ backgroundImage: `url(${post.thumbUrl})` }}
      />
      <article>
        <h1 className="title">{post.title}</h1>
        <span>{post.userName}</span>
      </article>
    </Link>
  );
}
