import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DataUser from "../Data/DataUser";
import "./CreatePost.css";

export default function CreatePost(props) {
  const { closeCreatePost } = props;
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  /* ดึงโปรไฟล์เจ้าของโพส */
  const UserProfile = DataUser.find((profile) => profile.UserId === "don2544");
  /* อ้างอิงปุ่มกับ input */
  const fileInputRef = useRef(null);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="CreatePost-popup">
        <div className="CreatePost-popup-bg" onClick={closeCreatePost} />
        <div className="CreatePost-popup-card">
          <div className="d-flex justify-content-center">
            <div className="head-create">
              <h3>Create Post</h3>
            </div>
          </div>
          <hr className="line" />
          <div className="main-create-post">
            <div className="name-img-create-post">
              <img
                className="user-img-create-post"
                src={UserProfile.imgUser}
                alt=""
              />
              <div>
                <h5>{UserProfile.userName}</h5>
                <h6 className="date-create-post">1 มีนาคม 2566</h6>
              </div>
            </div>
            <form className="form-create">
              {imageURLs.length > 0 ? (
                imageURLs.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="image-create-post"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                  />
                ))
              ) : (
                <button
                  className="add-img"
                  onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  Add Thumbnail
                </button>
              )}

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={onImageChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </form>
          </div>
          <hr className="line" />
          <div>
            <button className="btn btn-primary btn-lg next-bt">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
