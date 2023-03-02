import React from "react";
import { Link, useParams } from "react-router-dom";
import posts from "../Data/DataPosts";
import DataUser from "../Data/DataUser";
import Navbar from "./Navbar";
import "./PagePost.css";
export default function PagePost() {
  let { postId } = useParams();
  /* เอา posts มาหาว่าเท่ากับ postId ที่ส่งมาจาก useParams ไหมเพื่อจะลิ้งไปหน้าบทความนั้นๆ  */
  const post = posts.find((p) => p.postId === Number(postId));
  window.scrollTo(0, 0);
  /* เอา DataUser มาหาว่าเท่ากับ UserId ของ post ไหมเพื่อจะได้ดึงโปรไฟล์คนเขียนบทความมาใช้  */
  const UserProfile = DataUser.find(
    (profile) => profile.UserId === post.UserId
  );
  /* เช็คว่าในดาต้าเบสตอนเพิ่ม list มีรูปหรือมีข้อความมาไหมถ้าไม่มีก็ใส่ null ถ้ามีก็ใส่ตามเงื่อนไข ข้อมูลที่ใส่จะใส่เข้าไปใน listItems */
  const listItems = [];
  for (let index = 1; index <= 10; index++) {
    const img = post[`img${index}`];
    const list = post[`list${index}`];
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

  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor">
        <div className="backgroundColor">
          <div className="page-post-card">
            <div className="name-img">
              <Link to={`/${UserProfile.UserId}`}>
                <img className="user-img" src={UserProfile.imgUser} alt="" />
              </Link>
              <div>
                <Link className="Link-PagePost" to={`/${UserProfile.UserId}`}>
                  <h6>{post.userName}</h6>
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
            {listItems}
          </div>
        </div>
      </div>
    </div>
  );
}
