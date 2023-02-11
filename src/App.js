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
function App() {
  const postElements = posts.map((post, index) => {
    return <Home key={index} post={post} />;
  });
  return (
    <div className="AllbackgroundColor">
      {/* */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <div className="backgroundColor">
              <div className="band">{postElements}</div>
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
