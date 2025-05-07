import React from "react";

import SideBar from "../components/sidebar/SideBar";
import InfoPage from "../components/info/infoPage";
import TabBar from "../components/TabBar/TabBar";

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
      <TabBar />
    </div>
  );
}

export default AboutPage;
