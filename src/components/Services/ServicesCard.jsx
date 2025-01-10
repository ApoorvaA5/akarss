import React from "react";

function ServicesCard(props) {
  return (
    <div className={`services-card ${props.reverseLayout ? "reverse" : ""}`}>
      <div className="services-card-text">
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
      </div>
      <div className="services-card-img">
        <div className="img-container">
          <img src={props.imgSrc} alt="Akarswift Services Img" />
          <div className="img-overlay">
            <span className="img-text">Explore Our Services</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;



