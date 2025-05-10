import React, { useState, useEffect } from "react";
import "./NavButton.css";
import { IoMdClose } from "react-icons/io";
import { PiListBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function NavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [startSidebarClose, setStartSidebarClose] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleIconAnimationEnd = () => {
    setStartSidebarClose(true);
  };

  useEffect(() => {
    if (startSidebarClose) {
      const timer = setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
        setStartSidebarClose(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [startSidebarClose]);

  return (
    <>
      <button className="nav-button" onClick={() => setIsOpen(true)}>
        <PiListBold className="iconList" />
      </button>

      {(isOpen || isClosing) && (
        <>
          <div
            className={`overlay ${startSidebarClose ? "fade-out" : ""}`}
            onClick={handleClose}
          />
          <div className={`sidebar ${startSidebarClose ? "closing" : ""}`}>
            <div className="sidebar-content">
              <button className="close-btn" onClick={handleClose}>
                <IoMdClose
                  className={`iconClose ${isClosing ? "slide-out-right" : ""}`}
                  onAnimationEnd={handleIconAnimationEnd}
                />
              </button>
              <h2>Links</h2>
              <ul className="link-list">
                <li>
                  <a href="/about">Non Nguyen Vlog</a>
                </li>
                <li>
                  <a href="/resume">Non Nguyen Blog</a>
                </li>
              </ul>
            </div>

            <div className="containerBtnContact">
              <Link to="/contact" onClick={handleClose}>
                <button className="contact-btn">Contact with Non</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavButton;
