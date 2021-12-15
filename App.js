import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import LogIn from "./Data/LogIn";
import Profile from "./Data/Profile";
import ProfilePic from "./Data/Images/cover3.jpg";
import Users from "./Data/LocalStorage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
