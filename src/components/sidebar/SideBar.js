import React from "react";
import { FiUser, FiFileText, FiBookOpen } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./index.css";

function SideBar() {
  return (
    <div className="nav-list">
      <NavLink to="/" className="nav-item" end>
        <FiUser className="nav-icon" />
        <span className="nav-label">About</span>
      </NavLink>
      <NavLink to="/resume" className="nav-item">
        <FiFileText className="nav-icon" />
        <span className="nav-label">Resume</span>
      </NavLink>
      <NavLink to="/activities" className="nav-item">
        <FiBookOpen className="nav-icon" />
        <span className="nav-label">Activities</span>
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        <CgMail className="nav-icon" />
        <span className="nav-label">Contact</span>
      </NavLink>
    </div>
  );
}

export default SideBar;
