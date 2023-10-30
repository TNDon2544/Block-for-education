import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import DataUser from "../Data/DataUser";
import Multiselect from "multiselect-react-dropdown";
import "./CreatePost.css";

export default function CreatePost(props) {
  const { closeCreatePost } = props;
  const [thumbnail, setThumbnail] = useState([]);
  const [thumbnailURLs, setThumbnailURLs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img1, setImg1] = useState([]);
  const [imgURLs1, setImgURLs1] = useState([]);
  const [img2, setImg2] = useState([]);
  const [imgURLs2, setImgURLs2] = useState([]);
  const [img3, setImg3] = useState([]);
  const [imgURLs3, setImgURLs3] = useState([]);
  const [list1, setList1] = useState("");
  const [list2, setList2] = useState("");
  const [list3, setList3] = useState("");

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
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  /* ส่งค่ารูปที่เลือกไปเก็บใน imageURLs เพื่อจะใช้แสดงภาพที่เลือก*/
  useEffect(() => {
    if (thumbnail.length < 1) return;
    const newImageUrls = [];
    thumbnail.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setThumbnailURLs(newImageUrls);
  }, [thumbnail]);

  useEffect(() => {
    if (img1.length < 1) return;
    const newImageUrls = [];
    img1.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImgURLs1(newImageUrls);
  }, [img1]);

  useEffect(() => {
    if (img2.length < 1) return;
    const newImageUrls = [];
    img2.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImgURLs2(newImageUrls);
  }, [img2]);

  useEffect(() => {
    if (img3.length < 1) return;
    const newImageUrls = [];
    img3.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImgURLs3(newImageUrls);
  }, [img3]);

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
              {thumbnailURLs.length > 0 ? (
                thumbnailURLs.map((imageSrc, index) => (
                  <div
                    key={index}
                    className="image-create-post"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                  >
                    <div className="close-bt">
                      <i
                        className="bi bi-x-circle-fill"
                        onClick={() => {
                          setThumbnailURLs([]);
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
                onChange={(e) => {
                  setThumbnail([...e.target.files]);
                }}
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Title"
                rows="1"
              />
            </div>
            <div className="input-position">
              <textarea
                className="form-control content-input"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                placeholder="Content"
              />
            </div>

            <div>
              <form className="form-create">
                {imgURLs1.length > 0 ? (
                  imgURLs1.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="image-create-post"
                      style={{ backgroundImage: `url(${imageSrc})` }}
                    >
                      <div className="close-bt">
                        <i
                          className="bi bi-x-circle-fill"
                          onClick={() => {
                            setImgURLs1([]);
                            img1Ref.current.value = "";
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
                      img1Ref.current.click();
                    }}
                  >
                    Add Image1
                  </button>
                )}

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    setImg1([...e.target.files]);
                  }}
                  style={{ display: "none" }}
                  ref={img1Ref}
                />
              </form>
              <div className="input-position">
                <textarea
                  className="form-control content-input"
                  value={list1}
                  onChange={(e) => {
                    setList1(e.target.value);
                  }}
                  placeholder="List1"
                />
              </div>
            </div>

            <div>
              <form className="form-create">
                {imgURLs2.length > 0 ? (
                  imgURLs2.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="image-create-post"
                      style={{ backgroundImage: `url(${imageSrc})` }}
                    >
                      <div className="close-bt">
                        <i
                          className="bi bi-x-circle-fill"
                          onClick={() => {
                            setImgURLs2([]);
                            img2Ref.current.value = "";
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
                      img2Ref.current.click();
                    }}
                  >
                    Add Image2
                  </button>
                )}

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    setImg2([...e.target.files]);
                  }}
                  style={{ display: "none" }}
                  ref={img2Ref}
                />
              </form>
              <div className="input-position">
                <textarea
                  className="form-control content-input"
                  value={list2}
                  onChange={(e) => {
                    setList2(e.target.value);
                  }}
                  placeholder="List2"
                />
              </div>
            </div>

            <div>
              <form className="form-create">
                {imgURLs3.length > 0 ? (
                  imgURLs3.map((imageSrc, index) => (
                    <div
                      key={index}
                      className="image-create-post"
                      style={{ backgroundImage: `url(${imageSrc})` }}
                    >
                      <div className="close-bt">
                        <i
                          className="bi bi-x-circle-fill"
                          onClick={() => {
                            setImgURLs3([]);
                            img3Ref.current.value = "";
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
                      img3Ref.current.click();
                    }}
                  >
                    Add Image3
                  </button>
                )}

                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    setImg3([...e.target.files]);
                  }}
                  style={{ display: "none" }}
                  ref={img3Ref}
                />
              </form>
              <div className="input-position">
                <textarea
                  className="form-control content-input"
                  value={list3}
                  onChange={(e) => {
                    setList3(e.target.value);
                  }}
                  placeholder="List3"
                />
              </div>
            </div>

          </div>
          <hr className="line-create" />
          <div>
            <button className="btn btn-primary btn-lg post-bt">Post</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
