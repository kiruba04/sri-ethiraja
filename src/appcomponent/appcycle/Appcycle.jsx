
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const cardContent = [
  {
    title: "Project initiation",
    description: `The project initiation stage sets the foundation for development by transforming an idea into a clear vision. It involves gathering and refining functional and non-functional requirements, understanding user needs, and exploring market trends.`,
  },
  {
    title: "Requirements analysis",
    description: `The requirements analysis phase focuses on defining the application's functionalities, features, and constraints. By engaging users and stakeholders, the team gathers insights to align the product with user needs. Functional requirements specify core features like interactions and data processing, while non-functional requirements address performance, security, and usability.`,
  },
  {
    title: "Planning",
    description: `Planning is the backbone of successful application development, turning ideas into a structured roadmap. This phase identifies risks, defines clear goals, and ensures alignment among stakeholders. By gathering and analyzing data, the team makes informed decisions and prioritizes features that deliver the most value.`,
  },
  {
    title: "Prototyping and design",
    description: `Prototyping and design transform abstract concepts into tangible visuals, laying the foundation for a seamless user experience. The process begins with conceptualization, where stakeholders and designers brainstorm the application's structure, layout, and interface. Interactive prototypes showcase core functionalities and user flow, enabling early feedback and validation. `,
  },
  {
    title: "Development",
    description: `Development is where the application design takes shape, turning into a fully functional product. It’s a collaborative process that brings together specialists to work towards a common goal. Best practices include managing backlogs to prioritize tasks, estimating time for critical tasks, and aligning the technology stack with project requirements.`,
  },
  {
    title: "Testing",
    description: `
Testing is a critical phase in the application development lifecycle, ensuring the product is stable, secure, and user-friendly. The process involves identifying and fixing bugs, testing the application’s performance and security, and refining features based on feedback. User acceptance testing (UAT) allows representative users to test the app, providing insights into usability and areas for improvement.`,
  },
  {
    title: "Deployment and maintenance",
    description: `The deployment phase marks the final step of the development process, where the application is released to the production environment. This phase includes rigorous final testing and QA to ensure flawless performance. The application is then carefully deployed to the designated servers or cloud infrastructure, ensuring a smooth transition for users.`,
  },
];

const Appcycle = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <div className='charhead'>App life cycle</div>
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

  export default Appcycle;