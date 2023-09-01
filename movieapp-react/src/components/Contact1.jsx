import React from "react";
import "../style/Contact.css";
import { AiFillHome } from "react-icons/ai";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact1 = () => {
  return (
    <div>
      <h1>Get in touch with us</h1>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="contact-wrapper row g-0">
            <div className="col-6 col-md-7">
                <div className="map-container">

                </div>
            </div>
            <div className="col-6 col-md-5">
              <div>
                <p>
                  Have a question or need assistance with our movie streaming
                  service? We're here to help! Please use any of the following
                  methods to get in touch with our support team.
                </p>
              </div>
              <div className="social-buttons">
                <div className="centered-label">
                  <AiFillHome style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>
                    Jove Ilića 154, Belgrade
                  </span>
                </div>
                <div className="centered-label">
                  <MdOutlineEmail style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>flicks@cinema.rs</span>
                </div>
                <div className="centered-label">
                  <FaTwitter style={{ fontSize: 21 + "px" }} />{" "}
                  <span
                    style={{
                      paddingLeft: 13 + "px",
                      letterSpacing: 0.5 + "px",
                    }}
                  >
                    flicksofficial
                  </span>
                </div>
                <div className="centered-label">
                  <FaInstagram style={{ fontSize: 21 + "px" }} />{" "}
                  <span
                    style={{
                      paddingLeft: 13 + "px",
                      letterSpacing: 0.5 + "px",
                    }}
                  >
                    flickscinema
                  </span>
                </div>
                <div className="centered-label">
                  <BsFillTelephoneFill style={{ fontSize: 21 + "px" }} />{" "}
                  <span style={{ paddingLeft: 13 + "px" }}>
                    +381 66 2231993
                  </span>
                </div>
              </div>
              <div className="working-hours">
                <h5 className="text-uppercase mb-2">Opening hours</h5>
                <table className="text-center text-white">
                  <tbody
                    className="font-weight-normal"
                    style={{ background: "transparent" }}
                  >
                    <tr>
                      <td>Monday:</td>
                      <td>CLOSED</td>
                    </tr>
                    <tr>
                      <td>Tue - Fri:</td>
                      <td>12pm - 11pm</td>
                    </tr>
                    <tr>
                      <td>Weekends:</td>
                      <td>12pm - 2am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="contact-footer">
                <p>
                  For all questions check out FAQ section or email Flicks Customer Support: flicks@cinema.rs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
