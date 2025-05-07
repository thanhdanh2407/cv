import React from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";

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
      <TabBar />
    </div>
  );
}

export default ResumePage;
