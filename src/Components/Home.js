import React from "react";
import posts from "../Data/DataPosts";
import "./Home.css";
export default function Home() {
  return (
    <div className="AllbackgroundColor">
      <div className="backgroundColor">
        <div className="band">
          {posts.map((post, index) => (
            <div className="card" key={index}>
              <div
                className="thumb"
                style={{ backgroundImage: `url(${post.thumbUrl})` }}
              />
              <article>
                <h1 className="title">{post.title}</h1>
                <span>
                  {post.userName}
                  <i className="bi bi-suit-heart icon-heart">
                    &nbsp;{post.like}
                  </i>
                </span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
