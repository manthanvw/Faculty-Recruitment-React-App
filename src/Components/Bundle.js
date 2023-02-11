import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Monitor from "./Monitor";
import Post from "./Post";
import View from "./View";
import Edit from "./Edit";
import Notification from "./Notification";
import FacultyDashboard from "./Faculty/FacultyDashboard";
import FacultyApplications from "./Faculty/FacultyApplications";
import FacultyNotification from "./Faculty/FacultyNotification";
import FacultyProfile from "./Faculty/FacultyProfile";
import FacultySearch from "./Faculty/FacultySearch";
import Profile from "./Profile";
export default function Bundle() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" > Some error occured</Route>
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="monitor" element={<Monitor/>} />
        <Route path="post" element={<Post/>} />
        <Route path="view" element={<View/>} />
        <Route path="edit" element={<Edit/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="notifications" element={<Notification/>} />
        <Route path="fdashboard" element={<FacultyDashboard/>} />
        <Route path="fapplication" element={<FacultyApplications/>}/>
        <Route path="fnotification" element={<FacultyNotification/>}/>
        <Route path="fprofile" element={<FacultyProfile/>}/>
        <Route path="fsearch" element={<FacultySearch/>}/>
      </Routes>
    </Router>
  );
}
