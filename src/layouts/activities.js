import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

function ActivitiesPage() {
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "activities"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchActivities();
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
            <div className="containerRight">
              <h1 className="titlePage">Activities</h1>
              <div className="underline"></div>
              <div className="activitiesGrid">
                {activities.map((activity) => {
                  const [day, month] = activity.date.split("/");
                  return (
                    <div className="activityCard" key={activity.id}>
                      <div className="activityImageWrapper">
                        <img src={activity.image} alt={activity.title} />
                        <div className="activityDate">
                          <span className="day">{day}</span>
                          <span className="month">thg {month}</span>
                        </div>
                      </div>
                      <div className="activityContent">
                        <h3>
                          <a
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#333", textDecoration: "none" }}
                          >
                            {activity.title}
                          </a>
                        </h3>

                        <p>{activity.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default ActivitiesPage;
