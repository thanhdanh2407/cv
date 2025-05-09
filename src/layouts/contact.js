import React, { useEffect, useState } from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

import "./index.css";

import { BsSendFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Finished loading");
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Gửi thành công!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1000);
  };

  return (
    <div className="container">
      {(loading || submitting) && <LoadingSpinner />}
      {!loading && !submitting && (
        <div className="wrapper">
          <InfoPage />
          <div className="containerBottom">
            <div className="leftBottom">
              <SideBar />
            </div>
            <div className="rightBottom">
              <div className="containerRight">
                <h1 className="titlePage">Contact</h1>
                <div className="underline"></div>
                <div className="formContact">
                  <div className="inputContact">
                    <div className="inputWrapper">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="inputFullName"
                      />
                    </div>
                    <div className="inputWrapper">
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        className="inputEmail"
                      />
                    </div>
                  </div>
                  <div className="textareaWrapper">
                    <textarea
                      className="textareaContact"
                      placeholder="Your message..."
                    />
                  </div>
                  <div className="submitWrapper">
                    <button className="btnSubmit" onClick={handleSubmit}>
                      <BsSendFill className="btnSend" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TabBar />
        </div>
      )}
      <ToastContainer className="toastCustom" />
    </div>
  );
}

export default ContactPage;
