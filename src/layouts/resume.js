import React, { useEffect, useState } from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

function ResumePage() {
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
            <div className="containerRight">
              <h1 className="titlePage">Resume</h1>
              <div className="underline"></div>
              <div className="section">
                <h2 className="section-title">
                  <FaGraduationCap /> Education
                </h2>
                <div className="item">
                  <div className="content">
                    <h3>Ho Chi Minh City University of Technology</h3>
                    <p className="time">2020 — 2024</p>
                    <p>- Major: Information Technology</p>
                    <p>- Minor: Software Engineering</p>
                    <h4>Achievements</h4>
                    <p>
                      - Awarded Outstanding Student of the School three times
                    </p>
                    <p>
                      - Participated in academic competitions including
                      Hackathon and Code Your Future
                    </p>
                    <p>- Graduated with a Good classification</p>
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <h3>Minh Đam High School</h3>
                    <p className="time">2017— 2020</p>
                    <p>- Major: High school student</p>
                  </div>
                </div>
              </div>
              <div className="section">
                <h2 className="section-title">
                  <FaBriefcase /> Experience
                </h2>
                <div className="item">
                  <div className="dot"></div>
                  <div className="content">
                    <h3>Front-End Developer</h3>
                    <p className="time">
                      19/02/2024 - 19/10/2024 — Ho Chi Minh City Development
                      Joint Stock Commercial Bank
                    </p>
                    <strong>Learned: </strong>
                    <p>
                      + HTML/CSS, React ,NextJs, Redux Thunk, Redux, Redux API
                      CALL, Ungit, Git Flow, CodingConvention, Docker Basic
                    </p>
                    <strong>Worked on:</strong>
                    <p>- Participated in HD Bank Portal project</p>
                    <p> + Css Animation</p>
                    <p> + Draw Sequence Diagram Transaction</p>
                    <p> + Add more User to share role</p>
                    <p>
                      + Layout TableRedeem, AdminPageLayout, Layout Transaction,
                      Chart, Redeem, Pos, Notification
                    </p>

                    <p>
                      + TransactionComponent, TableComponent, ChartComponent
                    </p>
                    <p>- Participated in Chat Box project</p>
                    <p> + Chat Box layout</p>
                    <p> + Call API Chat Box render answer</p>
                    <p> + Load Text (Animation Chat box) </p>
                  </div>
                </div>
                <div className="item">
                  <div className="dot"></div>
                  <div className="content">
                    <h3>Technician</h3>
                    <p className="time">
                      07/12/2024 - 07/04/2025 — Viettel Vung Tau City
                    </p>
                    <strong>Responsibilities</strong>
                    <p>
                      - Installed, configured, and maintained network equipment
                      (routers, switches, modems).
                    </p>
                    <p>
                      - Provided technical support and troubleshooting for
                      customers and business clients.
                    </p>
                    <p>
                      - Monitored network performance and resolved issues to
                      ensure system stability.
                    </p>
                    <p>
                      - Assisted in deploying new technologies (4G, 5G, IoT) and
                      maintaining network infrastructure.
                    </p>
                    <p>
                      - Delivered training and technical support for internal
                      teams and customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default ResumePage;
