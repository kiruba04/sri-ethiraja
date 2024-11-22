import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const cardContent = [
  {
    title: "Centralized Operations Management",
    description: `ProMan integrates various manufacturing processes like inventory, purchasing, production planning, and delivery into a single system, ensuring better coordination and efficiency.`,
  },
  {
    title: "Cost-Effectiveness",
    description: `As a cloud-based solution, ProMan eliminates the need for heavy infrastructure investments and maintenance costs, allowing organizations to save resources while ensuring scalability.`,
  },
  {
    title: "Real-Time Data Access",
    description: `With its robust analytics and dashboard features, ProMan provides real-time insights that support informed decision-making and help identify opportunities for optimization.`,
  },
  {
    title: "Enhanced Collaboration",
    description: `By unifying different departments under a centralized system, ProMan fosters better communication and teamwork, leading to smoother workflows and improved productivity.`,
  },
  {
    title: "Automation of Repetitive Tasks",
    description: `ProMan automates routine processes, reducing manual errors, saving time, and allowing teams to focus on value-added activities.`,
  },
  {
    title: "Amplifies Search Visibility Through SEO",
    description: `Following SEO best practices boosts your brand’s visibility. By creating valuable content, using relevant keywords, and optimizing for mobile, you improve search engine rankings. An optimized site signals relevance and authority, increasing organic traffic and enhancing credibility. With most users staying on the first search results page, SEO ensures your business stays front and center for potential customers.`,
  },
  {
    title: "Industry Versatility",
    description: `It's adaptability across various manufacturing sectors—such as mechanical, electrical, electronics, and chemical—makes it a versatile tool for organizations of all sizes.`,
  },
  {
    title: "Cost Savings",
    description: `Improved resource allocation, inventory management, and operational efficiency contribute to cost reduction.`,
  },
  {
    title: "Data Analysis",
    description: ` Often includes robust dashboard, reporting and analytics tools that provide insights for informed decision-making`,
  },
];

const Reasons = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <div className='charhead'>Reasons why your business needs a ProMan</div>
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