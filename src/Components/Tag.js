import React from "react";
import Navbar from "./Navbar";
import "./Tag.css";
export default function Tag(props) {
  const { closeTag } = props;
  return (
    <div>
      <Navbar />
      <div className="tag-popup">
        <div className="tag-popup-bg" onClick={closeTag} />
        <div className="tag-popup-card">
          <div className="d-flex justify-content-center">
            <div className="head-tag">
              <h3>Tag</h3>
            </div>
          </div>
          <hr className="line-tag" />
        </div>
      </div>
    </div>
  );
}
