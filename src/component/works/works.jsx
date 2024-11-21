import React from "react";
import "./works.css";

const Works = () => {
  // Array to hold service information
  const services = [
    { title: "Material Management", id: "01" },
    { title: "SAP (AMS) Services", id: "02" },
    { title: "SAP Data migration", id: "03" },
    { title: "SAP Public cloud optimization", id: "04" },
    { title: "ERP implementation for large and MSME industries", id: "05" },
    { title: "Website development and hosting services", id: "06" },
    { title: "IoT Products and solutions", id: "07" },
    { title: "Mobile and Remote networking", id: "08" },
    { title: "Engineering process optimization", id: "09" },
    { title: "Cost engineering and optimization", id: "10" },
    { title: "Providing make or buy solutions", id: "11" },
    { title: "SAP Green field Implementation", id: "12" },
    { title: "HR compliances and Payroll Management (HR & PRM)", id: "13" },
    { title: "CRM configuration, Maintenance and Support Services", id: "14" },
    { title: "End-to-end Manufacturing solution providers", id: "15" },
    {title:"Business Process Re-engineering",id:"16" },
  ];

  const Workscard = ({ title, id }) => {
    return (
      <div className="services-item">
        <div className="services-title">
          <div className="services-id">{id}</div>
          <div className="services-text">{title}</div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="container mt-3 workcontainer">
      <div className="serviceshead">What We Do ?</div>
      <p className="servicepara">
        Our services optimize processes, enhance productivity, and ensure
        seamless management across manufacturing, HR, and CRM systems.
      </p>
      <div className="row g-3">
        {services.map((service, index) => (
          <div className="col-md-6" key={index}>
            <Workscard title={service.title} id={service.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
