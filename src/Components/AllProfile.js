import React, { useState } from "react";
import "./AllProfile.css";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";

export default function AllProfile() {
  /* สร้าง State เก็บข้อมูลหน้าที่คลิกเพื่อมาแสดงหน้าที่เลือกตามเงื่อนไขด้านล่าง */
  const [link, setLink] = useState("myPost");
  function handleLinkClick(clickedLink) {
    setLink(clickedLink);
  }
  /* สร้าง State เก็บข้อมูลหน้าที่คลิกเพื่อเปลี่ยนสีปุ่มให้รู้ว่าอยู่หน้าไหน */
  const [activeLink, setActiveLink] = useState("myPost");
  function handleActiveLinkClick(link) {
    setActiveLink(link);
  }

  let { UserId } = useParams();
  /*  เอา DataUser มาหาว่าเท่ากับ UserId ที่ส่งมาจาก useParams ไหมเพื่อจะลิ้งไปหน้า User นั้นๆ  */
  const user = DataUser.find((u) => u.UserId === String(UserId));
  /* เอา posts มา filter ว่า UserId ของ posts ตรงกับ UserId ของหน้า User ที่เปิดไหม (ดึงโพสของหน้า User นั้นๆ) */
  const filteredUserPosts = posts.filter((post) => post.UserId === user.UserId);
  const countPosts = filteredUserPosts.length;
  window.scrollTo(0, 0);
  /* เปลี่ยนปุ่มถ้าเป็นโปรไฟล์ตัวเองจะเป็นปุ่ม Edit Profile ถ้าเป็นโปรไฟล์คนอื่นจะเป็นปุ่ม Follow */
  let myProfileBT;
  let myDataProfile;
  let switchButton;
  if (user.UserId === "don2544") {
    myProfileBT = (
      <button className="btn btn-primary btn-sm button-size">
        Edit Profile
      </button>
    );
    /* ปุ่มเปลี่ยนหน้า */
    switchButton = (
      <div className="post-profile">
        <div className="profile-item">
          <Link
            className={
              activeLink === "myPost" ? "active-item" : "not-active-item"
            }
            onClick={() => {
              handleLinkClick("myPost");
              handleActiveLinkClick("myPost");
            }}
          >
            <i className="bi bi-grid-3x3" /> Posts
          </Link>
        </div>
        <div className="profile-item">
          <Link
            className={
              activeLink === "bookMark" ? "active-item" : "not-active-item"
            }
            onClick={() => {
              handleLinkClick("bookMark");
              handleActiveLinkClick("bookMark");
            }}
          >
            <i className="bi bi-bookmark" /> Bookmark
          </Link>
        </div>
      </div>
    );
    /* เงื่อนไขในการแสดงหน้าที่คลิก */
    if (link === "bookMark") {
      myDataProfile = (
        <div className="text-center">
          <h3>Bookmark</h3>
        </div>
      );
    }
    if (link === "myPost") {
      myDataProfile = (
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
      );
    }
  } else {
    myProfileBT = (
      <button className="btn btn-primary btn-sm button-size">Follow</button>
    );
    switchButton = (
      <div className="post-profile">
        <div className="profile-item">
          <Link className="active-item">
            <i className="bi bi-grid-3x3" /> Posts
          </Link>
        </div>
      </div>
    );
    myDataProfile = (
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
                {myProfileBT}
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
          {switchButton}
          {myDataProfile}
        </div>
      </div>
    </div>
  );
}
