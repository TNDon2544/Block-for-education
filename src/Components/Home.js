import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";
import Multiselect from "multiselect-react-dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [Data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tag = searchParams.get("tag");
    if (tag) {
      setSelectedTags([tag]);
      console.log("Tag:", tag);
      // Remove the tag from the URL
      searchParams.delete("tag");
      const newUrl = window.location.pathname + "?" + searchParams.toString();
      window.history.replaceState(null, "", newUrl);
    } else {
      setSelectedTags([]);
    }
  }, [location]);

  /* ค้นหา tag */
  const filteredTag = Data.filter((post) => {
    return post.tag.some((tag) => selectedTags.includes(tag));
  });

  console.log("selectedTags:", selectedTags);
  
  useEffect(() => {
    (async () => {
      await getdata();
    })();
  }, []);

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

  /* เงื่อนไขค้นหา post ที่ตรงกับ tag */
  let tagfound;
  if (selectedTags.length === 0) {
    tagfound = (
      <div className="band">
        {Data.map((post) => (
          <Link className="card" key={post.postId} to={`/home/${post.postId}`}>
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
                <i className="bi bi-suit-heart icon-heart">&nbsp;{post.like}</i>
              </span>
            </article>
          </Link>
        ))}
      </div>
    );
  } else if (filteredTag.length > 0) {
    tagfound = (
      <div className="band">
        {filteredTag.map((post) => (
          <Link className="card" key={post.postId} to={`/home/${post.postId}`}>
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
                <i className="bi bi-suit-heart icon-heart">&nbsp;{post.like}</i>
              </span>
            </article>
          </Link>
        ))}
      </div>
    );
  } else {
    tagfound = (
      <div className="warning-message-home">
        <h4> Not found. </h4>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor-home">
        <div className="backgroundColor-home">
          <div className="tag-home">
            <Multiselect
              isObject={false}
              options={tagOptions}
              selectedValues={selectedTags}
              onSelect={handleTagSelect}
              onRemove={handleTagSelect}
              placeholder="Select Tag"
              style={{
                chips: {
                  background: "#0d6efd",
                  color: "white",
                  borderRadius: "20px",
                  fontSize: "18px",
                },
                multiselectContainer: {
                  maxWidth: "1240px",
                  margin: "0 auto",
                },
                searchBox: {
                  borderBottom: "1px solid #a09e9e",
                  borderRadius: "20px",
                  paddingLeft: "20px",
                  paddingTop: "10px",
                  maxWidth: "1240px",
                  margin: "0 auto",
                },
              }}
              singleSelect
            />
          </div>
          {tagfound}
        </div>
      </div>
    </div>
  );
}
