import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Route, Routes } from "react-router-dom";
import "./App.css";

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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
