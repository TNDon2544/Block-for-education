import React, { useEffect } from "react";
import "./Search.css";

export default function Search(props) {
  const { onBgClick } = props;

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="search-popup">
      <div className="search-popup-bg" onClick={onBgClick} />
      <div className="search-popup-card">
        <div className="d-flex justify-content-center">
          <input
            type="text"
            id="search"
            className="form-control form-control-lg input-search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}
