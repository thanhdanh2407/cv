import React, { useEffect, useState } from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function ActivitiesPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập đang loading trang
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8 giây

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;
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
