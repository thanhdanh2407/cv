import React from "react";
import avatar from "../../assets/avatar.jpg";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import "./index.css";

function InfoPage() {
  return (
    <div className="containerInfo">
      <div className="leftInfo">
        <div className="avatarInfo">
          <img src={avatar} alt="avatar" className="imgAvatar" />
        </div>
        <div className="info">
          <h4 className="fullName">Hoàng Phú Thành Danh</h4>
          <div className="status">Software Developer</div>
          <ul className="itemInfo">
            <li>
              <a
                href="https://github.com/thanhdanh2407"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscGithubAlt className="iconGit" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/danh-ho%C3%A0ng-ph%C3%BA-th%C3%A0nh-615053220/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="iconLinked" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/24thang07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialFacebook className="iconFace" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider" />
      <div className="rightInfo">
        <div className="emailInfo">
          <span>Email</span>
          <span>danhhoang0145@gmail.com</span>
        </div>
        <div className="birthdayInfo">
          <span>Birthday</span>
          <span>24 July, 2002</span>
        </div>
        <div className="universityInfo">
          <span>University</span>
          <span>HUTECH University</span>
        </div>
        <div className="locationInfo">
          <span>Location</span>
          <span>Vung Tau City, Vietnam</span>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
