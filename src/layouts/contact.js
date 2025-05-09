import React, { useEffect, useState } from "react";
import InfoPage from "../components/info/infoPage";
import SideBar from "../components/sidebar/SideBar";
import TabBar from "../components/TabBar/TabBar";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

import "./index.css";

import emailjs from "emailjs-com";

import { BsSendFill } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Finished loading");
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast.error("Vui lòng điền đầy đủ thông tin.", {
        position: "top-center",
        autoClose: 3000,
      });
      return; // Dừng lại, không gửi
    }

    setLoading(true);

    const templateParams = {
      fullName,
      email,
      message,
    };

    emailjs
      .send(
        "service_t9fat9d",
        "template_20k031h",
        templateParams,
        "-Hk5w4GP3qgXGvIO1"
      )
      .then(
        (response) => {
          toast.success("Gửi thành công!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setFullName("");
          setEmail("");
          setMessage("");

          setSubmitting(false);
          setLoading(false);
        },

        (error) => {
          toast.error("Có lỗi xảy ra, vui lòng thử lại.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setSubmitting(false);
          setLoading(false);
        }
      );
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
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        placeholder="Full Name"
                        className="inputFullName"
                      />
                    </div>
                    <div className="inputWrapper">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                        className="inputEmail"
                      />
                    </div>
                  </div>
                  <div className="textareaWrapper">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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
