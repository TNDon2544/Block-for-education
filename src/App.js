import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
