import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import "./Ams.css";

import Receive from "../../assests/Receivingmessage.gif";
import Create from "../../assests/createmessage.gif";
import Monitor from "../../assests/monitormessage.gif";
import Assign from "../../assests/message.gif";
import Report from "../../assests/report.gif";
import Rightarrow from "../../assests/right-arrow.gif";
import Downarrow from "../../assests/down-arrow.gif";

const WorkProcess = () => {
  const steps = [
    { icon: Receive, title: "Receiving requests" },
    { icon: Create, title: "Creating message" },
    { icon: Monitor, title: "Monitoring messages" },
    { icon: Assign, title: "Assigning messages" },
    { icon: Report, title: "Reporting" },
  ];

  return (
    <Container fluid className="p-5 mt-4 amsflow">
      <h2 className="text-center mb-4 amstitle">Workflow of Service Desk</h2>
      <Row className="justify-content-center align-items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Col md={2} className="text-center">
              <Card className="p-3 shadow-sm border-0 flowcard">
                <Card.Body>
                  <div className="mb-3">
                    <img src={step.icon} alt={step.title} style={{ width: "60px", height: "60px" }} />
                  </div>
                  <Card.Text>{step.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {index < steps.length - 1 && (
              <Col md="auto" className="text-center arrow">
                <img src={Rightarrow} alt="right arrow" className="right-arrow" />
                <img src={Downarrow} alt="down arrow" className="down-arrow" />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
};

export default WorkProcess;
