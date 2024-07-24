import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footerContainer">
      <h3 className="footerPhrase">Excited to contribute and learn.</h3>
      <div className="buttonDiv">
        <button
          className="button primary footerButton"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </button>
        <p>or</p>
        <Link
          to="/resume"
          className="backText"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/16gPQVJrRMGQZtVOETAFElZ6wSBH6-IPt/view?usp=sharing"
            );
          }}
        >
          View my Resume
        </Link>
      </div>
      <hr />
      <p className="lightText">Designed and Developed : Vatsan</p>
    </div>
  );
};

export default Footer;
