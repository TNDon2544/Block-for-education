import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Search from "./Components/Search";
import Profile from "./Components/Profile";

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
      <Navbar />
      {component}
    </div>
  );
}

export default App;
