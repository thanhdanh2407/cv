import React from "react";
import banner from "../assets/banner.png";
import "./index.css";

function Header() {
  return (
    <div className="containerBanner">
      <img src={banner} alt="banner" className="imgBanner" />
    </div>
  );
}

export default Header;
