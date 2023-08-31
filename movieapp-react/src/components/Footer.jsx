import React from "react";
import Flicks from "../flickslogo.png";
import "../style/Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ token }) => {
  return (
    <div className="footer__content">
      <div className="footer__div">
        <link rel="stylesheet" href="Footer.css" />
        <img className="logo-footer" src={Flicks} alt="logo" />
        <ul className="ft__links text-uppercase">
          <li>
            <Link to="/in-cinema">Explore what's on</Link>
          </li>
          <li>
            <Link to="/contact">Reach out to flicks</Link>
          </li>
          {token == null ? (
            <li>
              <Link to="/register">Flicks sign up</Link>
            </li>
          ) : (
            <li>Flicks sign up</li>
          )}
        </ul>
        <ul className="ft__links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Manage Preferences</a>
          </li>
          <li>
            <a href="#">Terms Of Use</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Corporate Info</a>
          </li>
        </ul>
      </div>
      <div className="copyright">©2023 Flicks. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
