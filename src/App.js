import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;
    case "/post":
      component = <Post />;
      break;
    case "/search":
      component = <Search />;
      break;
    case "/profile":
      component = <Profile />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <div>
      <Login />
      {/*
      <Register/>
      <Navbar />
      {component}
      */}
    </div>
  );
}

export default App;
