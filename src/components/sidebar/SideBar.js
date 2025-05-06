import React from "react";
import { FiUser, FiFileText, FiBookOpen } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import "./index.css";

function SideBar() {
  return (
    <div className="nav-list">
      <div className="nav-item active">
        <FiUser className="nav-icon" />
        <span className="nav-label">About</span>
      </div>
      <div className="nav-item">
        <FiFileText className="nav-icon" />
        <span className="nav-label">Resume</span>
      </div>
      <div className="nav-item">
        <FiBookOpen className="nav-icon" />
        <span className="nav-label">Activities</span>
      </div>
      <div className="nav-item">
        <CgMail className="nav-icon" />
        <span className="nav-label">Contact</span>
      </div>
    </div>
  );
}

export default SideBar;
