import React, { useEffect } from "react";
import "./Comment.css";
import DataComment from "../Data/DataComment";
import { Link } from "react-router-dom";
import DataUser from "../Data/DataUser";
export default function Comment(props) {
  const { closeComment } = props;
  const { postId } = props;

  /* เปิด pop up จะไม่สามารถเลื่อนหน้าเพจหลัง pop up  */
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const comments = DataComment[postId];
  console.log("comments:", comments);

  let commentList;
  if (comments) {
    commentList = comments.map((comment) => {
      /* ดึง userName มาจากตาราง DataUser */
      const userData = DataUser.find((user) => user.UserId === comment.UserId);
      return (
        <div key={comment.commentId} className="all-comment-card">
          <Link to={`/${comment.UserId}`}>
            <img className="user-img-comment" src={userData.imgUser} alt="" />
          </Link>
          <Link className="Link-comment" to={`/${comment.UserId}`}>
            <h6>{userData.userName}</h6>
          </Link>
          <p className="comment-p">{comment.comment}</p>
          <h6 className="date-comment">{comment.date}</h6>
        </div>
      );
    });
  } else {
    commentList = (
      <div className="warning-message-comment">
        <i className="bi bi-chat-left-dots-fill chat-icon-comment"></i>
        <h4> No comments yet. </h4>
      </div>
    );
  }

  return (
    <div className="comment-popup">
      <div className="comment-popup-bg" onClick={closeComment} />
      <div className="comment-popup-card">
        <div className="d-flex justify-content-center">
          <div className="head-comment">
            <h3>Comment</h3>
            <i className="bi bi-x-lg close-comment" onClick={closeComment} />
          </div>
        </div>
        <hr className="line-comment" />
        <div className="main-comment">{commentList}</div>
        <hr className="line-comment" />
        <div className="box-text-comment">
          <div className="comment-input">
            <textarea
              className="form-control form-control-lg"
              placeholder="Comment"
              rows="1"
            />
          </div>
          <div className="comment-bt">
            <button className="btn btn-primary btn-lg">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
