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
              <VscGithubAlt className="iconGit" />
            </li>
            <li>
              <SlSocialLinkedin className="iconLinked" />
            </li>
            <li>
              <SlSocialFacebook className="iconFace" />
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
