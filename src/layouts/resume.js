import React from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";

function ResumePage() {
  return (
    <div className="container">
      <div className="wrapper">
        <InfoPage />
        <div className="containerBottom">
          <div className="leftBottom">
            <SideBar />
          </div>
          <div className="rightBottom">
            <span>Resume</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
