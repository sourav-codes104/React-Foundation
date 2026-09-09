import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Job from "./pages/Job";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Location from "./components/Location";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs" element={<Job/>}>
          <Route path=":id" element={<JobDetails/>}></Route>
          </Route>
          {/* <Route path="/jobs/:id" element={<JobDetails/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/location" element={<Location/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
