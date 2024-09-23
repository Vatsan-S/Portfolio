import React from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { IoInformationCircleOutline } from "react-icons/io5";

const Artlinq = () => {
  return (
    <div className="projectContainer">
      <Navbar />
      <Link to="/">
        <p className="backText"> Development Project</p>
      </Link>
      <h2 className="pageTitle projectPageTitle">
        Connecting Artists with Clients Through a Seamless Booking and
        Communication Platform.
      </h2>
      <a
        href="https://artlinqfe.vercel.app/"
        target="_blank"
        title="Click here to redirect"
      >
        <div className="imagePreview">
          <img
            src="https://res.cloudinary.com/ddycjnke1/PreviewImg_bbebaw"
            alt="TaskManagement web app preview and link"
          />
        </div>
        <p className="suggestionText">Click the preview to redirect</p>
      </a>
      <div className="productPageLayout">
      <h3>Credentials</h3>
      
      <p>email:artist2@gmail.com</p>
      <p>password:Passwd@147</p>
      <br /><br />
      <a href="https://github.com/Vatsan-S/artlinqfe">Git Hub - Frontend</a>
      <br />
      <a href="https://github.com/Vatsan-S/ArtLinQ-BE">Git Hub - Backend</a>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Description</h3>
        <p className="contentInProjectPage">
          ArtLinq is a dynamic platform designed to bridge the gap between
          artists and those who appreciate their craft. Users can easily
          register to explore a diverse range of artists, each showcasing their
          unique talents across various forms of art—from visual arts to
          performance and design. Through ArtLinq, users have the opportunity to
          book appointments with their favorite artists, enabling meaningful
          collaborations or discussions to continue working together on creative
          projects. For artists, ArtLinq offers a comprehensive space to
          register, highlight their services, and manage their appointments
          seamlessly. The platform empowers artists to connect with potential
          clients or collaborators at their convenience, providing a flexible
          and user-friendly interface that caters to their professional needs.
          In essence, ArtLinq is more than just a directory; it’s a vibrant
          community that fosters creativity, collaboration, and growth within
          the art world.
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
              <span className="boldText">Appointment Management: </span>Artists
              and users can manage their appointments, including scheduling,
              rescheduling, and cancellations, ensuring a smooth booking
              process.
            </li>
            <li>
              {" "}
              <span className="boldText">Artist Profile Creation: </span>
              Artists can easily create and customize their profiles, showcasing
              their work and services to attract potential clients.
            </li>
            <li>
              {" "}
              <span className="boldText">Service Listings & Bookings: </span>
              Artists can list their services, and users can browse these
              listings, book appointments, and manage their schedules directly
              through the platform.
            </li>
            <li>
              {" "}
              <span className="boldText"> Direct Communication: </span>{" "}
              Facilitates seamless communication between artists and clients,
              allowing for discussions, clarifications, and collaborative
              planning.
            </li>
            <li>
              {" "}
              <span className="boldText">Search: </span> Users can quickly find
              services using the search options, making it easier to connect
              with the right creative professionals.
            </li>
          </ul>
        </p>
      </div>
      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/PreviewImg2_yjqn5f"
          alt=""
        />
      </div>
      <div className="imagePreview">
        <img
          src="https://res.cloudinary.com/ddycjnke1/PreviewImg3_utibuk"
          alt=""
        />
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Summary</h3>
        <p className="contentInProjectPage">
          ArtLinq is a personal practice project designed to help me hone my
          skills in full-stack development. Through building this platform, I
          aim to deepen my understanding of web technologies, improve my coding
          practices, and gain hands-on experience in creating user-centric
          applications. This project is a step towards refining my abilities and
          exploring new concepts in both frontend and backend development.
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
              title="Connecting Artists with Clients Through a Seamless Booking and Communication Platform."
              who="Freelance Artists"
              role="Research to code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id='3'
              image='https://res.cloudinary.com/ddycjnke1/Display_Image_juphsd'
            />
            </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artlinq;
