import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./CreatePost.css";


export default function CreatePost(props) {
  const { closeCreatePost } = props;

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
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
}
