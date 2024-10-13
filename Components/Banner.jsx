import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="bannerContainer">
      <div className="bannerContentBox">
        <div className="bannerContent">
          <img
            src="https://res.cloudinary.com/ddycjnke1/My_Pic_v167oh"
            alt=""
            className="profileImg"
          />
          <h3 className="bannerTitle">From Designs to Code: My Journey</h3>
          <p className="bannerDescription">
            Evolving with Every Challenge: Committed to Excellence and Mastery
          </p>
          <div className="ActionButtons">
          
          <a href="https://www.behance.net/infocreatoca34" target="_blank"><button className="button primary bannerButton">Explore Design Portfolio</button></a>
          <button className="button bannerButton" onClick={()=>{navigate("/about")}}>My journey</button>
          </div>
        </div>
        <div className="bannerImageContainer">
          <img
          className="bannerImg"
            src="https://res.cloudinary.com/ddycjnke1/Banner_Img_rzfpe7"
            alt=""
          />
        </div>
      </div>
      <div className="bgStripContainer">
        {/* <img
          className="bgStrip"
          src="https://res.cloudinary.com/ddycjnke1/Wave_woxq3c"
          alt=""
        /> */}
        <svg  viewBox="0 0 1920 680" fill="none" preserveAspectRatio='XminYmax meet'>
<path d="M2094.42 678.764C1796.94 582.606 1636.69 522.659 1360.48 409.156C1124.17 327.454 1003.57 364.5 791.312 450.346C283.949 652.527 230.731 318.863 -24.9995 1" stroke="#2EE261" stroke-width="2" stroke-dasharray="35 55"/>
</svg>

      </div>
    </div>
  );
};

export default Banner;
