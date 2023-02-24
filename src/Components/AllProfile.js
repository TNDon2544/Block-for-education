import React from "react";
import "./AllProfile.css";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

export default function AllProfile() {
  let { UserId } = useParams();
  const user = DataUser.find((u) => u.UserId === String(UserId));
  const filteredUserPosts = posts.filter(
    (post) => post.userName === user.userName
  );
  const countPosts = filteredUserPosts.length;
  window.scrollTo(0, 0);
  let myProfile;
  if (user.userName === "Thanadon Pongjessada") {
    myProfile = (
      <button className="btn btn-primary btn-sm button-size">
        Edit Profile
      </button>
    );
  } else {
    myProfile = (
      <button className="btn btn-primary btn-sm button-size">Follow</button>
    );
  }
  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor-profile">
        <div className="backgroundColor-profile">
          <div className="profile-position">
            <img className="img-profile" src={user.imgUser} alt="" />
            <div>
              <div className="profile-name-button">
                <h4 className="h4-name">{user.userName}</h4>
                {myProfile}
              </div>
              <div className="follow">
                <div className="follow-item">
                  <h6 className="h6-font">{countPosts} Posts</h6>
                </div>
                <div className="follow-item">
                  <h6 className="h6-font">{user.Followers} Followers</h6>
                </div>
                <div className="follow-item">
                  <h6 className="h6-font">{user.Following} Following</h6>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-position" />
          <div>
            <div className="band-profile">
              {filteredUserPosts.map((post) => (
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
    </div>
  );
}
