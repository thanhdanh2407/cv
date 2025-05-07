import React from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";

function ActivitiesPage() {
  return (
    <div className="container">
      <div className="wrapper">
        <InfoPage />
        <div className="containerBottom">
          <div className="leftBottom">
            <SideBar />
          </div>
          <div className="rightBottom">
            <span>Activities</span>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default ActivitiesPage;
