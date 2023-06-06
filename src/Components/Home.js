import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      await getdata();
    })();
  }, []);
  const [Data, setData] = useState([]);
  const getdata = async () => {
    await fetch("http://localhost:3000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };
  /* ฟังก์ชันนี้ทำให้ไม่เปิด Link post เมื่อคลิก Three-dots*/
  const handleTDClick = (event) => {
    event.preventDefault();
  };
  let myThreeDot = (
    <div className="Three-dots">
      <DropdownButton
        onClick={handleTDClick}
        title={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        }
      >
        <Dropdown.Item as="div">
          <div>
            <i className="bi bi-bookmark icon-home" />
            &nbsp; Add Bookmark
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <div>
            <i className="bi bi-pencil icon-home" />
            &nbsp; Edit
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <div style={{ color: "red" }}>
            <i className="bi bi-trash3 icon-home" />
            &nbsp; Delete
          </div>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );

  let threeDot = (
    <div className="Three-dots">
      <DropdownButton
        onClick={handleTDClick}
        title={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        }
      >
        <Dropdown.Item as="div">
          <div>
            <i className="bi bi-bookmark icon-home" />
            &nbsp; Add Bookmark
          </div>
        </Dropdown.Item>
        <Dropdown.Item as="div">
          <div>
            <i className="bi bi-exclamation-square icon-home" />
            &nbsp; Report
          </div>
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor-home">
        <div className="backgroundColor-home">
          <div className="band">
            {Data.map((post /* เอา posts มาลูปเพื่อแสดงข้อมูล */) => (
              <Link
                className="card"
                key={post.postId}
                to={`/home/${post.postId}`}
              >
                {" "}
                {/* ตรวจสอบว่าใช้โพสตัวเองไหมถ้าใช่จะเปลี่ยนปุ่ม ThreeDot */}
                {post.UserId === "don2544" ? myThreeDot : threeDot}
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${post.thumbUrl})` }}
                />
                <article>
                  <h1 className="title">{post.title}</h1>
                  <span className="span">
                    {post.userName}
                    <i className="bi bi-suit-heart icon-heart">
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
