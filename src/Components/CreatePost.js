import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DataUser from "../Data/DataUser";
import Multiselect from "multiselect-react-dropdown";
import "./CreatePost.css";

export default function CreatePost(props) {
  const { closeCreatePost } = props;
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = [
    "DIGITAL CIRCUIT AND LOGIC",
    "DATA COMMUNICATION AND NETWORK",
    "OBJECT ORIENTED PROGRAMMING",
    "DATABASE DESIGN AND APPLICATION",
    "MICROCONTROLLER SYSTEMS",
    "ARTIFICIAL INTELLIGENCE",
    "COMPUTER ARCHITECTURE",
    "DATA STRUCTURE AND ALGORITHM",
    "COMPUTER NETWORK SYSTEM",
    "WEB APPLICATION DEVELOPMENT",
    "EMBEDDED CONTROL SYSTEM",
    "DISCRETE MATHEMATICS",
    "OPERATING SYSTEM",
    "MOBILE AND CLOUD COMPUTING",
    "NETWORK SECURITY",
    "SELECTED TOPICS IN COMPUTER",
    "WIRELESS COMMUNICATION",
  ];

  const handleTagSelect = (selectedList) => {
    setSelectedTags(selectedList);
  };
  /* ดึงโปรไฟล์เจ้าของโพส */
  const UserProfile = DataUser.find((profile) => profile.UserId === "don2544");
  /* อ้างอิงปุ่มกับ input */
  const fileInputRef = useRef(null);
  /* ส่งค่ารูปที่เลือกไปเก็บใน imageURLs เพื่อจะใช้แสดงภาพที่เลือก*/
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  /* ส่งค่ารูปที่เลือกไปเก็บไว้ใน images */
  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  /* เปิด pop up จะไม่สามารถเลื่อนหน้าเพจหลัง pop up  */
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);
  /* ดึงค่าวันที่มาแสดง */
  const date = new Date();
  const options = {
    timeZone: "Asia/Bangkok",
    hour12: false,
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div>
      <Navbar />
      <div className="CreatePost-popup">
        <div className="CreatePost-popup-bg" onClick={closeCreatePost} />
        <div className="CreatePost-popup-card">
          <div className="d-flex justify-content-center">
            <div className="head-create">
              <h3>Create Post</h3>
              <i
                className="bi bi-x-lg close-create"
                onClick={closeCreatePost}
              />
            </div>
          </div>
          <hr className="line-create" />
          <div className="main-create-post">
            <div className="name-img-create-post">
              <img
                className="user-img-create-post"
                src={UserProfile.imgUser}
                alt=""
              />
              <div>
                <h5>{UserProfile.userName}</h5>
                <h6 className="date-create-post">{formattedDate}</h6>
              </div>
            </div>
            <form className="form-create">
              {imageURLs.length > 0 ? (
                imageURLs.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="image-create-post"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                  >
                    <div className="close-bt">
                      <i
                        className="bi bi-x-circle-fill"
                        onClick={() => {
                          setImageURLs([]);
                          fileInputRef.current.value = "";
                        }}
                      />
                    </div>
                  </div>
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
            <div className="tag-position">
              <Multiselect
                isObject={false}
                options={tagOptions}
                selectedValues={selectedTags}
                onSelect={handleTagSelect}
                onRemove={handleTagSelect}
                placeholder="Select Tag"
                selectionLimit={2}
                style={{
                  chips: {
                    fontSize: "14px",
                    marginBottom: "20px",
                  },
                  searchBox: {
                    border: "none",
                    borderBottom: "1px solid #a09e9e",
                    borderRadius: "0px",
                  },
                }}
              />
            </div>
            <div className="input-position">
              <textarea
                className="form-control title-input"
                placeholder="Title"
                rows="1"
              />
            </div>
            <div className="input-position">
              <textarea
                className="form-control content-input"
                placeholder="Content"
              />
            </div>
          </div>
          <hr className="line-create" />
          <div>
            <button className="btn btn-primary btn-lg post-bt">Post</button>
          </div>
          <div>
            <button className="btn btn-primary btn-lg add-column-bt">
              Add Column
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
