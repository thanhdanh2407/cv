import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import InfoPage from "../components/info/infoPage";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import "./index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function AboutPage() {
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
              <h1 className="titlePage">About Me</h1>
              <div className="underline"></div>
              <p>
                Hello, I'm Danh, a frontend developer with 1 year of experience
                in building responsive and user-friendly web interfaces. I
                specialize in modern JavaScript frameworks like React.js and
                have a solid understanding of backend basics using Node.js. I
                enjoy turning designs into functional products and continuously
                improving my skills to keep up with the latest front-end
                technologies
              </p>
              <p>
                My motto is:
                <i>
                  <b>"Code with purpose, grow with passion."</b>
                </i>
              </p>

              <h2 className="experience-title">I have experience with</h2>
              <div className="experience-grid">
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png"
                    alt="SAP"
                    className="experience-logo"
                  />
                  <h4>GitHub</h4>
                  <p>Storing source code and version control</p>
                </div>
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/GitLab_icon.svg/640px-GitLab_icon.svg.png"
                    alt="HxGN"
                    className="experience-logo"
                  />
                  <h4>GitLab</h4>
                  <p>
                    Storing source code and version control but can be
                    self-hosted.
                  </p>
                </div>
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png"
                    alt="SAP"
                    className="experience-logo"
                  />
                  <h4>MongoDb</h4>
                  <p>NoSQL database for flexible data storage.</p>
                </div>
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
                    alt="HxGN"
                    className="experience-logo"
                  />
                  <h4>NodeJs</h4>
                  <p>Building server-side applications with JavaScript.</p>
                </div>
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
                    alt="SAP"
                    className="experience-logo"
                  />
                  <h4>ReactJs</h4>
                  <p>Creating user interfaces (UI)</p>
                </div>
                <div className="experience-card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/640px-Nextjs-logo.svg.png"
                    alt="HxGN"
                    className="experience-logo"
                  />
                  <h4>NextJs</h4>
                  <p>Framework for React to build modern web applications</p>
                </div>
              </div>
              <h2>Dự Án</h2>
              <div className="project-logos-slider">
                <Swiper
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  modules={[Autoplay]}
                >
                  {[
                    "https://yte.viettel.vn/upload/1000337/20210118/Viettel-without_slogan-01_34bf1bf614.png",
                    "https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-HDBank.png",
                    "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b0/Logo_v2_c%E1%BB%A7a_PV_Oil.png/640px-Logo_v2_c%E1%BB%A7a_PV_Oil.png",
                    "https://startupwheel.vn/wp-content/uploads/2021/04/hutech-university-logo.jpg",
                  ].map((src, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={src}
                        alt={`project-${index}`}
                        className="project-logo-img"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabBar />
    </div>
  );
}

export default AboutPage;
