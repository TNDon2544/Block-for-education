import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CreatePost from "./Components/Create-Post";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PagePost from "./Components/PagePost";
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
        <Route path="/home">
          <Route path=":postId" element={<PagePost />} />
        </Route>
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
