import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import Navbar from "./Navbar";
import "./PagePost.css";
import Comment from "./Comment";
export default function PagePost() {
  let { postId } = useParams();
  /* เอา posts มาหาว่าเท่ากับ postId ที่ส่งมาจาก useParams ไหมเพื่อจะลิ้งไปหน้าบทความนั้นๆ  */
  const post = posts.find((p) => p.postId === Number(postId));
  const allTag = post.tag;
  const img = post.img;
  const list = post.list;
  const maxLength = Math.max(img.length, list.length);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let comment = null;
  if (isCommentOpen) {
    comment = (
      <Comment postId={postId} closeComment={() => setIsCommentOpen(false)} />
    );
  }
  /* ดึง userName มาจากตาราง DataUser */
  const userData = DataUser.find((user) => user.UserId === post.UserId);

  /* เอา DataUser มาหาว่าเท่ากับ UserId ของ post ไหมเพื่อจะได้ดึงโปรไฟล์คนเขียนบทความมาใช้  */
  const UserProfile = DataUser.find(
    (profile) => profile.UserId === post.UserId
  );

  const listItem = (
    <div>
      {Array.from({ length: maxLength }).map((_, index) => (
        <div key={index}>
          {img[index] && (
            <img className="image-content" src={img[index]} alt="" />
          )}
          {list[index] && <div className="content">{list[index]}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor">
        <div className="backgroundColor">
          <div className="page-post-card">
            <div className="box-comment">
              <div className="comment-item">
                <i className="bi bi-suit-heart" />
              </div>
              <div className="comment-item">
                <i
                  className="bi bi-chat-left"
                  onClick={() => setIsCommentOpen(true)}
                />
              </div>
              <div className="comment-item">
                <i className="bi bi-bookmark" />
              </div>
            </div>
            <div className="name-img">
              <Link to={`/${UserProfile.UserId}`}>
                <img className="user-img" src={UserProfile.imgUser} alt="" />
              </Link>
              <div className="name-date">
                <Link className="Link-PagePost" to={`/${UserProfile.UserId}`}>
                  <h6>{userData.userName}</h6>
                </Link>
                <h6 className="date">{post.date}</h6>
              </div>
            </div>
            <div
              className="image-thumb"
              style={{ backgroundImage: `url(${post.thumbUrl})` }}
            />
            <div className="title-page-post">
              <h4>{post.title}</h4>
            </div>
            <div className="content">{post.content}</div>
            {listItem}
            <div className="tag-position-page">
              {allTag.map((tag, index) => (
                <Link
                  className="btn btn-sm tag-bt"
                  to={`/home?tag=${encodeURIComponent(tag)}`}
                  key={index}
                  onClick={(e) => e.stopPropagation()}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {comment}
    </div>
  );
}
