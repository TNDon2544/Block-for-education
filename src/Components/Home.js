import { Link } from "react-router-dom";
import posts from "../Data/DataPosts";
import Navbar from "./Navbar";
import "./Home.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Home() {
  // const handleClick = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div>
      <Navbar />
      <div className="AllbackgroundColor-home">
        <div className="backgroundColor-home">
          <div className="band">
            {posts.map((post /* เอา posts มาลูปเพื่อแสดงข้อมูล */) => (
              <Link
                className="card"
                key={post.postId}
                to={`/home/${post.postId}`}
              >
                <div className="Three-dots">
                  <NavDropdown
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
                    <NavDropdown.Item>
                      <i className="bi bi-bookmark bookmark" />
                      &nbsp; Add Bookmark
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <i className="bi bi-exclamation-square report" />
                      &nbsp; Report
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
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
