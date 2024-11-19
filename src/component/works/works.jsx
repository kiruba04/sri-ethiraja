import React from "react";
import Card from "react-bootstrap/Card";
import "./works.css";

const Workscard = ({ title, id }) => {
  return (
    <Card className="text-left p-3 workcard">
      <Card.Body className="d-flex justify-content-space-around align-items-center">
        <Card.Title className="mb-3 servicetitle titlefont" style={{ fontWeight: "bold", fontSize: "2rem" }}>
          {String(id).padStart(2, '0')} {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

const Works = () => {
  // Array to hold service information
  const services = [
    { title: "•	Material Management.", id: "1" },
    { title: "•	SAP (AMS) Services.", id: "2" },
    { title: "•	SAP Data migration.", id: "3" },
    { title: "•	SAP Public cloud optimization", id: "4" },
    { title: "•	ERP implementation for large and MSME industries", id: "5" },
    { title: "•	Website development and hosting services.", id: "6" },
    { title: "•	IoT Products and solutions.", id: "7" },
    { title: "•	Mobile and Remote networking.", id: "8" },
    { title: "•	Engineering process optimization.", id: "9" },
    { title: "•	Cost engineering and optimization.", id: "10" },
    { title: "•	Providing make or buy solutions.", id: "11" },
    { title: "•	SAP Green field Implementation.", id: "12" },
    { title: "•	HR compliances and Payroll Management (HR & PRM).", id: "13" },
    { title: "•	CRM configuration, Maintenance and Support Services.", id: "14" },
    { title: "•	End-to-end Manufacturing solution providers.", id: "15" }


  ];

  return (
    <div className="container mt-3 workcontainer">
      <div className="serviceshead">What We Do </div>
      <p className="servicepara workpara">
      Our services optimize processes, enhance productivity, and ensure seamless management across manufacturing, HR, and CRM systems.
      </p>
      <div className="row g-3 customcards">
        {services.map((service, index) => (
          <div className="col-md-4 customcard" key={index}>
            <Workscard title={service.title} id={service.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
