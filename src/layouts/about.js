import React from "react";

import SideBar from "../components/sidebar/SideBar";
import InfoPage from "../components/info/infoPage";

function AboutPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <InfoPage />
        <div className="containerBottom">
          <div className="leftBottom">
            <SideBar />
          </div>
          <div className="rightBottom">
            <span>About me</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
