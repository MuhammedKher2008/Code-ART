import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Courses from "./components/courses";
import CoursesDetails from "./components/CoursesDetails"
import Login from "./components/login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Courses" element={<Courses />}/>
          <Route path="/CoursesDetails" element={<CoursesDetails />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
