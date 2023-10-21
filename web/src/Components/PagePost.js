import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../Data/DataPosts";
import Navbar from "./Navbar";
import "./PagePost.css";
import Comment from "./Comment";
export default function PagePost() {
  let { postID } = useParams();
  const [DataPost, setDataPost] = useState([]);
  const [DataUser, setDataUesr] = useState([]);
  /* เอา posts มาหาว่าเท่ากับ postId ที่ส่งมาจาก useParams ไหมเพื่อจะลิ้งไปหน้าบทความนั้นๆ  */
  const post = posts.find((p) => p.postId === Number(postID));
  const postApi = DataPost.find((p) => p.postID === String(postID));
  const allTag = postApi ? postApi.tag : [];

  const [isCommentOpen, setIsCommentOpen] = useState(false);

  useEffect(() => {
    (async () => {
      await getdataUser();
      await getdataPost();
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let comment = null;
  if (isCommentOpen) {
    comment = (
      <Comment postId={postID} closeComment={() => setIsCommentOpen(false)} />
    );
  }

  const getdataPost = async () => {
    await fetch("http://localhost:3001/api/getdataPost", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Before Data: ", result.Result);
        setDataPost(result.Result);
      });
  };
  const getdataUser = async () => {
    await fetch("http://localhost:3001/api/GetDataUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Before DataUser: ", result.Result);
        setDataUesr(result.Result);
      });
  };


  /* ดึง userName มาจากตาราง DataUser */
  const userData = DataUser.find((user) => user.UserId === post.UserId);

  /* เอา DataUser มาหาว่าเท่ากับ UserId ของ post ไหมเพื่อจะได้ดึงโปรไฟล์คนเขียนบทความมาใช้  */
  const UserProfile = DataUser.find(
    (profile) => profile.UserId === post.UserId
  );

  /* เช็คว่าในดาต้าเบสตอนเพิ่ม list มีรูปหรือมีข้อความมาไหมถ้าไม่มีก็ใส่ null ถ้ามีก็ใส่ตามเงื่อนไข ข้อมูลที่ใส่จะใส่เข้าไปใน listItems */
  const listItems = [];
  for (let index = 1; index <= 3; index++) {
    if (postApi) {
      const img = postApi[`img${index}`];
      const list = postApi[`list${index}`];
      if (list || img) {
        const content = list ? <div className="content">{list}</div> : null;
        const image = img ? (
          <img className="image-content" src={img} alt="" />
        ) : null;
        listItems.push(
          <div key={index}>
            {image}
            {content}
          </div>
        );
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor">
        <div className="backgroundColor">
          {postApi ? (
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
                  <h6 className="date">{postApi.date}</h6>
                </div>
              </div>
              <div
                className="image-thumb"
                style={{ backgroundImage: `url(${postApi.thumbURL})` }}
              />
              <div className="title-page-post">
                <h4>{postApi.title}</h4>
              </div>
              <div className="content">{postApi.content}</div>
              {listItems}
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
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {comment}
    </div>
  );
}
