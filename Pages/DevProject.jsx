import React from "react";
import { IoArrowBack } from "react-icons/io5";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { IoInformationCircleOutline } from "react-icons/io5";

const DevProject = () => {
  return (
    <div className="projectContainer">
      <Navbar />
      <Link to="/">
        <p className="backText"> Development Project</p>
      </Link>

      <h2 className="pageTitle projectPageTitle">
        MERN Ecommerce Practice Project With Admin Dashboard
      </h2>
      <a
        href="https://identity-ecommerce-frontend.vercel.app/"
        target="_blank"
        title="Click here to redirect"
      >
        <div className="imagePreview">
          <img
            src="https://res.cloudinary.com/ddycjnke1/Preview1_dseisp"
            alt="Eccomerce web app preview and link"
          />
        </div>
        <p className="suggestionText">Click the preview to redirect</p>
      </a>
      <div className="productPageLayout">
      <h3>Admin Credentials</h3>
      
      <p>email:vatsan@gmail.com</p>
      <p>password:123456</p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Description</h3>
        <p className="contentInProjectPage">
          Welcome to my MERN Ecommerce Practice Project with Admin Dashboard, a
          journey into ecommerce development showcasing my exploration of the
          MERN (MongoDB, Express.js, React.js, Node.js) stack. Designed for
          developers seeking practical experience, this project emphasizes my
          commitment to learning and applying versatile technologies in modern
          web application development.
        </p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Technologies Used:</h3>
        <p className="contentInProjectPage">
          <ul>
            <li>
              {" "}
              <span className="boldText">FrontEnd: </span>Developed using
              React.js to create responsive and intuitive user interfaces.
            </li>
            <li>
              {" "}
              <span className="boldText">Backend: </span>Powered by Node.js and
              Express.js for robust server-side functionality.
            </li>
            <li>
              {" "}
              <span className="boldText">Database: </span> MongoDB employed for
              efficient and scalable data management.
            </li>
          </ul>
        </p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Key components:</h3>
        <p className="contentInProjectPage">
          <ul>
            <li>
              {" "}
              <span className="boldText">Product Catalog: </span>Explore diverse
              products with detailed descriptions.
            </li>
            <li>
              {" "}
              <span className="boldText">Shopping Cart: </span>Seamlessly manage
              selections and transactions.
            </li>
            <li>
              {" "}
              <span className="boldText">User Authentication: </span> Includes
              basic signup and login functionalities.
            </li>
            <li>
              {" "}
              <span className="boldText">Admin Dashboard: </span> Includes
              inventory to edit product, stocks and have few basic stats of
              sales
            </li>
            <li>
              {" "}
              <span className="boldText">Responsive Design: </span>Ensures
              accessibility across various devices and screen sizes.
            </li>
          </ul>
        </p>
      </div>
      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/Preview2_bsndyq"
          alt=""
        />
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Summary</h3>
        <p className="contentInProjectPage">
          This project represents my commitment to learning and applying modern
          web development technologies effectively. It's an opportunity for me
          to grow and refine my skills while creating practical, user-friendly
          solutions.
        </p>
      </div>
      {/* -------------------------------------------------------------------------------------------------- */}
      <div className="caseStudiesContainer">
        <p className="secondaryTitle">Few Projects & Casestudies</p>
        <div className="homeCardsContainer">
          <div className="cardLayout">
            <div className="currentCard">
              <div className="currentCardOverlay">
                <p className="secondaryTitle overlayText">
                  <IoInformationCircleOutline />
                  Currently Reading
                </p>
              </div>
              <Card
                type="Development"
                title="MERN Ecommerce Practice Project With Admin Dashboard"
                id="1"
                image="https://res.cloudinary.com/ddycjnke1/EcommerceCardPreview_p3am4o"
                who="Practice Project"
                role="Design-Code"
              />
            </div>
          </div>
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
              type="Case Study"
              title="Improving Customer Lifetime Value CLTV - Here its productivity"
              image="https://res.cloudinary.com/ddycjnke1/Preview_image_bskymj"
              link="https://www.behance.net/gallery/145928103/Improving-customer-lifetime-value-CLTV"
              who="Team Management Platforms"
              role="Research"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DevProject;
