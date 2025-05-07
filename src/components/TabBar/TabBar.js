import React from "react";
import { FiUser, FiFileText, FiBookOpen } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import "./TabBar.css";

function TabBar() {
  return (
    <div className="tab-bar">
      <NavLink to="/" className="tab-item" end>
        <FiUser className="tab-icon" />
        <span className="tab-label">About</span>
      </NavLink>
      <NavLink to="/resume" className="tab-item">
        <FiFileText className="tab-icon" />
        <span className="tab-label">Resume</span>
      </NavLink>
      <NavLink to="/activities" className="tab-item">
        <FiBookOpen className="tab-icon" />
        <span className="tab-label">Activities</span>
      </NavLink>
      <NavLink to="/contact" className="tab-item">
        <CgMail className="tab-icon" />
        <span className="tab-label">Contact</span>
      </NavLink>
    </div>
  );
}

export default TabBar;
