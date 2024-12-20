import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="industriesContainer">
        <p className="secondaryTitle">Industries I've Worked with</p>
        <ul className="industriesList">
          <li className="industry">F&B</li>
          <li className="industry">Marketing</li>
          <li className="industry">Management</li>
          <li className="industry">Hospitality</li>
          <li className="industry">Publishing</li>
        </ul>
      </div>
      <div className="industriesContainer">
        <div className="designCard">
          <h2 className="designText">Explore my <br />design portfolio</h2>
          <a href="https://www.behance.net/infocreatoca34" target="blank"><h5 className="button">Click here &gt;&gt;&gt;&gt;</h5></a>
        </div>
      </div>
      <div className="caseStudiesContainer">
        <p className="secondaryTitle">Dev Projects & Casestudies</p>
        <div className="homeCardsContainer">
        <div className="cardLayout">
            <Card
              type="Development"
              title="Task Management Web app for teams alike Trello"
              who="Portfolio Project"
              role="Research, design wireframes to code"
              id="2"
              image='https://res.cloudinary.com/ddycjnke1/Display_Img_brwt32'
              
            />
          </div>
          
         
          <div className="cardLayout">
            <Card
              type="Development"
              title="Connecting Artists with Clients Through a Seamless Booking and Communication Platform."
              who="Freelance Artists"
              role="Research to code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id='3'
              image='https://res.cloudinary.com/ddycjnke1/Display_Image_juphsd'
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Development"
              title="E-commerce Platform for Natural Products with Product and Delivery Management."
              who="Product Owners"
              role="code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id='4'
              image='https://res.cloudinary.com/ddycjnke1/Display_Image_mx4bjc'
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Development"
              title="MERN Ecommerce Practice Project With Admin Dashboard"
              id="1"
              image="https://res.cloudinary.com/ddycjnke1/EcommerceCardPreview_p3am4o"
              who="Practice Project"
              role="Design-Code"
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Case Study"
              title="Improving Customer Lifetime Value CLTV - Here its productivity"
              image="https://res.cloudinary.com/ddycjnke1/Preview_image_bskymj"
              link="https://www.behance.net/gallery/145928103/Improving-customer-lifetime-value-CLTV"
              who='Team Management Platforms'
              role='Research'
            />
          </div>
           <div className="cardLayout">
            <Card
              type="Design"
              title="To Design a complex sales management application - with simpler userflows and information architecture"
              who="Hospitality Marketing Team"
              role="Research to UI"
              link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              image='https://res.cloudinary.com/ddycjnke1/PreviewImage3_snpk78'
            />
          </div>
        </div>
      </div>
      {/* <hr /> */}
      {/* <div className="industriesContainer">
      <h3 className="bannerTitle">From Designs to Code: My Journey</h3>
          <p className="bannerDescription">
            Evolving with Every Challenge: Committed to Excellence and Mastery
          </p>
      <a href="https://www.behance.net/infocreatoca34" target="_blank"><button className="button primary bannerButton">Explore Design Portfolio</button></a>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
