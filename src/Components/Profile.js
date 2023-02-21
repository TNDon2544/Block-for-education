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
  window.scrollTo(0, 0);
  return (
    <div className="AllbackgroundColor-profile">
      <div className="backgroundColor-profile">
        <div className="profile-position">
          <img className="img-profile" src={UserProfile.imgUser} alt="" />
          <div>
            <div className="profile-name-button">
              <h4 className="h4-name">{UserProfile.userName}</h4>
              <button className="btn btn-primary btn-sm button-size">
                Edit Profile
              </button>
            </div>
            <div className="follow">
              <div className="follow-item">
                <h6 className="h6-font">{countPosts} Posts</h6>
              </div>
              <div className="follow-item">
                <h6 className="h6-font">10 Followers</h6>
              </div>
              <div className="follow-item">
                <h6 className="h6-font">10 Following</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-position" />
        <div>
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
    </div>
  );
}
