import React from "react";
import { Link } from "react-router-dom";
import posts from "../Data/DataPosts";
import "./Home.css";
export default function Home() {
  return (
    <div className="AllbackgroundColor">
      <div className="backgroundColor">
        <div className="band">
          {posts.map((post) => (
            <Link
              className="card"
              key={post.postId}
              to={`/home/${post.postId}`}
            >
              <div
                className="thumb"
                style={{ backgroundImage: `url(${post.thumbUrl})` }}
              />
              <article>
                <h1 className="title">{post.title}</h1>
                <span className="span">
                  {post.userName}
                  <i className="bi bi-suit-heart icon-heart">
                    &nbsp;{post.like}
                  </i>
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
