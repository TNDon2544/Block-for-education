import React from "react";
import "./Profile.css";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import { Link } from "react-router-dom";

export default function Profile() {
  const filteredUser = posts.filter(
    (post) => post.userName === "Mongkut Kanchana"
  );
  const countPosts = filteredUser.length;
  const UserProfile = DataUser.find(
    (profile) => profile.userName === "Mongkut Kanchana"
  );
  return (
    <div>
      <div className="profile-position">
        <div>
          <img className="img-profile" src={UserProfile.imgUser} alt="" />
        </div>
        <div>
          <div className="profile-name">
            <h4>{UserProfile.userName}</h4>
            <button className="btn btn-primary">Edit Profile</button>
          </div>
          <div className="follow">
            <h6>{countPosts} Posts</h6>
            <h6>10 Followers</h6>
            <h6>10 Following</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="position-profile-post">
        <div className="band-profile">
          {filteredUser.map((post) => (
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
