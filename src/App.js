import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PagePost from "./Components/PagePost";
import { Route, Routes } from "react-router-dom";
import AllProfile from "./Components/AllProfile";

function App() {
  return (
    <div>
      {/* กำหนดเส้นทางในการเปลี่ยนหน้า Web */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home">
          <Route path=":postId" element={<PagePost />} />
        </Route>
        <Route path="">
          <Route path=":UserId" element={<AllProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
