import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const cardContent = [
  {
    title: "Streamlined Patient Data Management",
    description: 'Our ERP system organizes and centralizes patient information, including personal details, medical history, treatment plans, and prescriptions. This enables healthcare professionals across departments to access accurate, up-to-date patient records quickly, improving patient care and reducing errors.',
  },
  {
    title: "Enhanced Administrative Efficiency",
    description: `Integrating administrative tasks such as billing, scheduling, and inventory management into a unified platform eliminates redundancies and automates processes. For instance, our ERP ensures seamless billing operations, minimizes errors, and accelerates payment collection.`,
  },
  {
    title: "Informed Decision-Making Through Advanced Analytics",
    description: `With built-in analytics tools, our ERP system aggregates data from various departments to create detailed reports and dashboards. This empowers hospital administrators to make data-driven decisions, optimize resources, and implement effective patient care strategies.`,
  },
  {
    title: "Optimized Resource Allocation",
    description: `Our ERP system automates resource management by analyzing patterns in patient admissions and operational demands. It adjusts staff schedules, monitors supply usage, and ensures critical resources are available when needed, reducing waste and enhancing efficiency.`,
  },
  {
    title: "Effective Supply Chain and Inventory Control",
    description: `By integrating procurement, inventory tracking, and supplier management, our ERP minimizes stockouts and overstocking. Advanced technologies like barcode scanning and RFID ensure accurate inventory monitoring and real-time updates on supply levels.`,
  },
  {
    title: "Improved Interdepartmental Communication",
    description: `Our ERP acts as a centralized platform that fosters collaboration among various hospital departments. By sharing real-time data, it ensures all teams work with the latest information, promoting coordination and improving overall operational efficiency.`,
  },
  {
    title: "Predictive Analytics for Future Planning",
    description: `Using historical data and predictive analytics, our ERP forecasts trends in patient care needs, resource utilization, and operational demands. This helps hospitals proactively plan for future requirements, ensuring better preparedness and preventive care.`,
  },
  {
    title: "Cost Savings",
    description: `Improved resource allocation, inventory management, and operational efficiency contribute to cost reduction.`,
  },
  {
    title: "Enhanced Patient Care and Satisfaction",
    description: `With streamlined workflows, accurate data, and optimized resources, healthcare professionals can focus more on patient care. Reduced delays, better resource management, and seamless communication contribute to improved patient outcomes and satisfaction.`,
  },
];

const Reasons = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <div className='charhead'>Reasons why your Hospital needs a Sri Agam Mithran</div>
        </div>
        <Row>
          {cardContent.map((item, index) => (
            <Col md={6} lg={4} key={index} className="mb-2">
              <div className="reason-card">
                <div className="content">
                  <p className="logo">{(index + 1).toString().padStart(2, '0')}</p>
                  <div className="h6">{item.title}</div>
                  <div className="hover_content">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  export default Reasons;