import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import posts from "./Data/DataPosts";
import "./App.css";
import { useState } from "react";
import PostPopup from "./Components/PostPopup";
function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  function onPostOpenClick(post) {
    setSelectedPost(post);
  }

  function onPostCloseClick() {
    setSelectedPost(null);
  }

  const postElements = posts.map((post, index) => {
    return <Home key={index} post={post} onPostClick={onPostOpenClick} />;
  });

  let postPopup = null;
  if (!!selectedPost) {
    postPopup = <PostPopup post={selectedPost} onBgClick={onPostCloseClick} />;
  }

  return (
    <div>
      {/* */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <div className="home-AllbackgroundColor">
              <div className="home-backgroundColor">
                {postPopup}
                <div className="home-band">{postElements}</div>
              </div>
            </div>
          }
        />
        <Route path="/post" element={<Post />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
