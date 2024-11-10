import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Services.css";
import Web from "../../assests/web.png";
import App from "../../assests/app.png";
import Sap from "../../assests/sap.png";

const MarketingCard = ({ title, bgColor, linkText, textcolor, image }) => {
  return (
    <Card style={{ backgroundColor: bgColor, borderRadius: "15px", color: "#000" }} className="text-left p-3 cardshadow">
      <Card.Body className="d-flex justify-content-space-around align-items-center">
        <Card.Title className="mb-3 servicetitle" style={{ fontWeight: "bold", fontSize: "2rem", color: textcolor }}>
          {title}
        </Card.Title>
        <img className="cardimg" src={image} alt={title} />
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 p-0">
        <Button variant="link" className="learnmore d-flex align-items-center">
          {linkText} <span className="ml-2">→</span>
        </Button>
      </Card.Footer>
    </Card>
  );
};

const MarketingDashboard = () => {
  return (
    <div className="container mt-3 servicecontainer">
      <div className="serviceshead">OUR SERVICES</div>
      <p className="servicepara">we offer a range of services to help businesses grow and succeed online. These services include:</p>
      <div className="row g-3">
        <div className="col-md-4">
          <MarketingCard
            title="SAP Services"
            bgColor="#feab3a"
            image={Sap}
            linkText="Learn more"
            textcolor="black"
          />
        </div>
        <div className="col-md-4">
          <MarketingCard
            title="Web Service"
            bgColor="#212121"
            image={Web}
            linkText="Learn more"
            textcolor="white"
          />
        </div>
        <div className="col-md-4">
          <MarketingCard
            title="App Development"
            bgColor="#feab3a"
            image={App}
            linkText="Learn more"
            textcolor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;
