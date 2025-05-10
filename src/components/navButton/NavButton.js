// import React, { useState, useEffect } from "react";
// import "./NavButton.css";
// import { IoMdClose } from "react-icons/io";
// import { PiListBold } from "react-icons/pi";
// import { Link } from "react-router-dom";

// function NavButton() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [startSidebarClose, setStartSidebarClose] = useState(false);
//   const [theme, setTheme] = useState("light");

//   const handleClose = () => {
//     setIsClosing(true);
//   };

//   const handleIconAnimationEnd = () => {
//     setStartSidebarClose(true);
//   };

//   useEffect(() => {
//     if (startSidebarClose) {
//       const timer = setTimeout(() => {
//         setIsOpen(false);
//         setIsClosing(false);
//         setStartSidebarClose(false);
//       }, 500);
//       return () => clearTimeout(timer);
//     }
//   }, [startSidebarClose]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <>
//       <button className="nav-button" onClick={() => setIsOpen(true)}>
//         <PiListBold className="iconList" />
//       </button>

//       {(isOpen || isClosing) && (
//         <>
//           <div
//             className={`overlay ${startSidebarClose ? "fade-out" : ""}`}
//             onClick={handleClose}
//           />
//           <div className={`sidebar ${startSidebarClose ? "closing" : ""}`}>
//             <div className="sidebar-content">
//               <button className="close-btn" onClick={handleClose}>
//                 <IoMdClose
//                   className={`iconClose ${isClosing ? "slide-out-right" : ""}`}
//                   onAnimationEnd={handleIconAnimationEnd}
//                 />
//               </button>
//               <h2>SETTING</h2>
//               <ul className="link-list">
//                 <li>
//                   <button onClick={toggleTheme}>Toggle Theme</button>
//                 </li>
//                 <li>
//                   <a href="/resume">Non Nguyen Blog</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="containerBtnContact">
//               <Link to="/contact" onClick={handleClose}>
//                 <button className="contact-btn">Contact with Danh</button>
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default NavButton;

import React, { useState, useEffect } from "react";
import "./NavButton.css";
import { IoMdClose } from "react-icons/io";
import { PiListBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function NavButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [startSidebarClose, setStartSidebarClose] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleIconAnimationEnd = () => {
    setStartSidebarClose(true);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

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
              <h2>SETTING</h2>
              <ul className="link-list">
                <li>
                  <button className="toggle-theme-btn" onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                  </button>
                </li>
              </ul>
            </div>

            <div className="containerBtnContact">
              <Link to="/contact" onClick={handleClose}>
                <button className="contact-btn">Contact with Danh</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavButton;
