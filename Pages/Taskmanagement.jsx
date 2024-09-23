import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { IoInformationCircleOutline } from "react-icons/io5";
const Taskmanagement = () => {
  return (
    <div className="projectContainer">
      <Navbar />
      <Link to="/">
        <p className="backText"> Development Project</p>
      </Link>
      <h2 className="pageTitle projectPageTitle">
        Task Management Web app for teams alike Trello
      </h2>
      <a
        href="https://infinityflow-fe.vercel.app/"
        target="_blank"
        title="Click here to redirect"
      >
        <div className="imagePreview">
          <img
            src="https://res.cloudinary.com/ddycjnke1/InfiFlow2_wy34vj"
            alt="TaskManagement web app preview and link"
          />
        </div>
        <p className="suggestionText">Click the preview to redirect towards project</p>
      </a>

      <div className="productPageLayout">
      <h3>Credentials</h3>
      <p>Credentials are given at login Page</p>
      <br /><br />
      <a href="https://github.com/Vatsan-S/infinityflowFE">GitHub Link - Frontend</a>
      <a href="https://github.com/Vatsan-S/InfinityFlowBE">GitHub Link - Backend</a>

      <p>Sign In to Manager and get into <strong>BOX 2</strong></p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Description</h3>
        <p className="contentInProjectPage">
          Welcome to my Task Management Web App, a project crafted to enhance
          team alignment and productivity through transparent workflows and
          goal-oriented task tracking. Built using the MERN (MongoDB,
          Express.js, React.js, Node.js) stack, this app reflects my dedication
          to solving real-world challenges in project management. It offers a
          hands-on exploration of modern web development practices, aiming to
          provide a practical solution for companies seeking to streamline
          operations and maintain a clear focus on their vision and mission as
          they grow.
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
              <span className="boldText">Task Creation & Assignment: </span>
              Easily create tasks, assign them to team members, and set
              priorities to keep everyone aligned with project goals.
            </li>
            <li>
              {" "}
              <span className="boldText">Team & Role Management: </span>Manage
              user roles and teams efficiently, allowing for clear delegation
              and tracking of responsibilities.
            </li>
            <li>
              {" "}
              <span className="boldText"> Subtask Management: </span> Create,
              assign, and track subtasks with ease, ensuring that complex
              projects are broken down into manageable steps.
            </li>
            <li>
              {" "}
              <span className="boldText">Request Raising: </span> Streamline
              communication by allowing team members to raise requests for
              resources, approvals, or support, keeping the workflow smooth and
              efficient.
            </li>
            <li>
              {" "}
              <span className="boldText">Search: </span>Quickly locate tasks and
              subtasks using the search feature, making it easy to
              navigate even the most detailed projects.
            </li>
          </ul>
        </p>
      </div>
      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/InfiFlow1_yxn47i"
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
              title="Task Management Web app for teams alike Trello"
              who="Portfolio Project"
              role="Research, design wireframes to code"
              id="2"
              image='https://res.cloudinary.com/ddycjnke1/Display_Img_brwt32'
              
            />
            </div>
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
          </div><div className="cardLayout">
            
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

export default Taskmanagement;
