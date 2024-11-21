import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Services.css";
import Web from "../../assests/web.png";
import App from "../../assests/app.png";
import Sap from "../../assests/sap.png";
import { useNavigate } from "react-router-dom";

const MarketingCard = ({ title, bgColor, linkText, textcolor, image, backgroundImage,link }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ backgroundColor: bgColor, borderRadius: "15px", color: "#000" }} className="text-left p-3 cardshadow">
      <Card.Body className="d-flex justify-content-space-around align-items-center">
        <Card.Title
          className="mb-3 servicetitle"
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            color: textcolor,
            background: `-webkit-linear-gradient(transparent, transparent), url(${backgroundImage}) repeat`,
            WebkitBackgroundClip: "text",
          }}
        >
          {title}
        </Card.Title>
        <img className="cardimg" src={image} alt={title} />
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 p-0">
  <Button variant="link" style={{ color:textcolor}} className="learnmore d-flex align-items-center" onClick={() => navigate(`${link}`)}>
    {linkText} <span className="ml-2">→</span>
  </Button>
</Card.Footer>

    </Card>
  );
};


const MarketingDashboard = () => {

  return (
    <div className="container mt-3 servicecontainer">
      <div className="serviceshead">Our Service</div>
      <p className="servicepara">We offer a range of services to help businesses grow and succeed online. These services include:</p>
      <div className="row g-3">
        <div className="col-md-4">
          <MarketingCard
            title="SAP Services"
            bgColor="#feab3a"
            image={Sap}
            linkText="Learn more"
            textcolor="white"
            backgroundImage="http://html5book.ru/wp-content/uploads/2016/08/bubbles.png"
            link="/sap"
           
          />
        </div>
        <div className="col-md-4">
          <MarketingCard
            title="Web Service"
            bgColor="#ffffff"
            image={Web}
            linkText="Learn more"
            textcolor="black"
            backgroundImage="https://th.bing.com/th/id/R.059a805395cd6de4ff3d531e273f1566?rik=pgPAY7YuEsv8Vg&riu=http%3a%2f%2flh3.ggpht.com%2fX4O9R2o8pVRPs878EEjOJeaWLSP3h2f0-637wl8w1YM1vdoCl5-obo4qIDLnQWi59JyD8NOKjszy1qSaoF04w52DhvY%3ds600-c&ehk=frDd200eCdA%2fevmot31MLEX7AEaoYsu0pQGE6mmJ%2byU%3d&risl=&pid=ImgRaw&r=0"
            link ="/web-service"
        />
        </div>
        <div className="col-md-4">
          <MarketingCard
            title="App Development"
            bgColor="#feab3a"
            image={App}
            linkText="Learn more"
            textcolor="white"
            backgroundImage="http://html5book.ru/wp-content/uploads/2016/08/bubbles.png"
            link="/app-dev"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;
