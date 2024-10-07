import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, type, who, role, id, image,link }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if(id){
      navigate(`/project/${id}`);
    }
    else{
      window.open(link, "_blank")
      
    }
    
  };
  return (
    <div className="cardContainer" onClick={handleClick}>
      <div className="cardImg">
        <img src={image} alt="" />
      </div>
      <div className="cardTextContent">
        <h4 className="cardTitle">{title}</h4>
        <div className="para">
          {/* <p className="cardPara">Who: {who}</p> */}
          <p className="cardPara">Role: {role}</p>
        </div>
        {type === "Design" ? (
          <button className="typeDesign">{type}</button>
        ) : (
          <div className="buttonWrapper">
            <button className="devDesign">{type}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
