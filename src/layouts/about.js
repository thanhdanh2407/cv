import React from "react";

import SideBar from "../components/sidebar/SideBar";
import InfoPage from "../components/info/infoPage";

function AboutPage() {
  return (
    <div className="containerAbout">
      <div className="wrapperAbout">
        <InfoPage />
        <div className="containerBottomAbout">
          <div className="leftBottomAbout">
            <SideBar />
          </div>
          <div className="rightBottomAbout"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
