import React from "react";
import "./Profile.css";
import posts from "../Data/DataPosts";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div className="profile-position">
        <div>
          <img
            className="img-profile"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <div className="profile-name">
            <h4>Mongkut Kanchana</h4>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
          <div className="follow">
            <h6>10 posts</h6>
            <h6>10 followers</h6>
            <h6>10 following</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="position-profile-post">
        <div className="band-profile">
          {posts.map((post) => (
            <Link
              className="card-profile"
              key={post.postId}
              to={`/home/${post.postId}`}
            >
              <div
                className="thumb-profile"
                style={{ backgroundImage: `url(${post.thumbUrl})` }}
              />
              <article>
                <h1 className="title-profile">{post.title}</h1>
                <span className="span-profile">
                  {post.userName}
                  <i className="bi bi-suit-heart icon-heart-profile">
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
