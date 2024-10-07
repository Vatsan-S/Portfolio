import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { IoInformationCircleOutline } from "react-icons/io5";

const SereneSoil = () => {
  return (
    <div className="projectContainer">
      <Navbar />
    
      <h2 className="pageTitle projectPageTitle">
        E-commerce Platform for Natural Products with Product and Delivery
        Management.
      </h2>
      <a
        href="https://agri-dell.vercel.app/"
        target="_blank"
        title="Click here to redirect"
      >
        <div className="imagePreview">
          <img
            src="https://res.cloudinary.com/ddycjnke1/Frame_191_bx9wml"
            alt="E-commerce platform preview and link"
          />
        </div>
        <p className="suggestionText">
          Click the preview to redirect towards project
        </p>
      </a>

      <div className="productPageLayout">
        <h3>Credentials</h3>
        <br />
        <p>
          <strong>User </strong>
          <br />
          Email: user1@gmail.com, Password: 123456 <br />
          <br />
          <strong>Admin</strong> <br />
          Username: admin123, Password: admin@pass
        </p>
        <a href="https://agri-dell-vigz.vercel.app/">Admin Link</a>
        <br />
        <br />
        <a href="https://github.com/Vatsan-S/AgriDell">Repository Link</a>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Description</h3>
        <p className="contentInProjectPage">
          Welcome to Serene Soil, an eCommerce platform that champions a natural
          lifestyle by offering products crafted with 99% natural ingredients.
          Developed using the MERN (MongoDB, Express.js, React.js, Node.js)
          stack, this project reflects my dedication to creating sustainable and
          user-friendly web solutions. It provides customers with an easy
          shopping experience and equips admins with efficient product
          management and order delivery tools, showcasing a practical approach
          to modern eCommerce development.{" "}
        </p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Technologies Used:</h3>
        <p className="contentInProjectPage">
          <ul>
            <li>
              {" "}
              <span className="boldText">FrontEnd: </span>Built with React.js,
              providing an engaging and seamless user experience.
            </li>
            <li>
              {" "}
              <span className="boldText">Backend: </span>Implemented using
              Node.js and Express.js for efficient handling of server-side
              logic.
            </li>
            <li>
              {" "}
              <span className="boldText">Database: </span>Utilized MongoDB for
              flexible and scalable data storage.
            </li>
            <li>
              {" "}
              <span className="boldText">Payment Integration: </span>Integrated
              with Razorpay for secure and smooth payment processing.
            </li>
            <li>
              {" "}
              <span className="boldText">Authentication: </span>Secured with
              JSON Web Tokens (JWT) to protect user data and ensure safe
              transactions.
            </li>
          </ul>
        </p>
      </div>

      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Key Components:</h3>
        <p className="contentInProjectPage">
          <ul>
            <li>
              {" "}
              <span className="boldText">Product Browsing: </span>
              Effortlessly explore a wide range of natural products, making it
              easy for customers to find what they need.
            </li>
            <li>
              {" "}
              <span className="boldText">Shopping Cart: </span>
              Add products to the cart and manage selections before checkout,
              ensuring a smooth purchasing process.
            </li>
            <li>
              {" "}
              <span className="boldText">Order Management: </span>
              Track order status and history, allowing customers to stay
              informed about their purchases.
            </li>
            <li>
              {" "}
              <span className="boldText">Admin Dashboard: </span>
              Manage product listings, update delivery statuses, and oversee
              customer orders efficiently.
            </li>
            <li>
              {" "}
              <span className="boldText">Secure Payment: </span>
              Integrated Razorpay for safe and easy payment transactions,
              enhancing the overall shopping experience.
            </li>
          </ul>
        </p>
      </div>

      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/Frame_190_inxk62"
          alt="additional ui"
        />
      </div>
      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/Frame_192_dmvego"
          alt="additional ui"
        />
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Summary</h3>
        <p className="contentInProjectPage">
          This project reflects my dedication to promoting sustainability
          through technology. By creating an accessible platform for natural
          products, I aim to enhance user experience while honing my skills in
          modern web development.
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
                title="Task Management Web app for teams alike Trello"
                who="Portfolio Project"
                role="Research, design wireframes to code"
                id="2"
                image="https://res.cloudinary.com/ddycjnke1/Display_Img_brwt32"
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
                image="https://res.cloudinary.com/ddycjnke1/Display_Img_brwt32"
              />
          </div>
          <div className="cardLayout">
            <Card
              type="Development"
              title="Connecting Artists with Clients Through a Seamless Booking and Communication Platform."
              who="Freelance Artists"
              role="Research to code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id="3"
              image="https://res.cloudinary.com/ddycjnke1/Display_Image_juphsd"
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SereneSoil;
