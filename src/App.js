import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import {BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Post from "./components/post/Post";

function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/about" element={<Sidebar/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
      </Router>
  );
}

export default App;
