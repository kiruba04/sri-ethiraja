import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Reasons.css'

const cardContent = [
  {
    title: "Showcases Credibility and Professionalism",
    description: `A meticulously designed and well-curated website doesn’t just represent your brand — it elevates it. Greeting online visitors with intuitive user experiences, polished designs, and responsive performance signals that every facet of your business matters.`,
  },
  {
    title: "Increases Brand Awareness",
    description: `Your website directly reflects your brand, showing visitors who you are and what your business represents. Every web design detail, from typography to content style, contributes to your brand’s identity and personality.`,
  },
  {
    title: "Provides 24/7 Accessibility and Convenience",
    description: `Unlike a brick-and-mortar store with set operating hours, your website operates around the clock, offering products, services, and vital information without constraints.`,
  },
  {
    title: "Enhances Customer Engagement",
    description: `Interactive website features actively engage visitors, converting passive browsers into leads and loyal customers. Sharing expertise through blog posts and collecting user input through feedback forms boost engagement.`,
  },
  {
    title: "Enables Data Collection and Analysis",
    description: `Every visitor interaction provides website statistics that help you better understand audience preferences and refine your strategies.`,
  },
  {
    title: "Amplifies Search Visibility Through SEO",
    description: `Following website SEO best practices enhances your brand’s discoverability. Crafting quality content and optimizing for search engines increases organic traffic.`,
  },
  {
    title: "Harnesses Digital Marketing Avenues",
    description: `Your website anchors all online endeavors, providing a cohesive narrative that boosts your brand's bottom line.`,
  },
  {
    title: "Evolves With Audience Preferences",
    description: `Flexibility to adjust content, design, and navigation ensures your website remains relevant and user-centric.`,
  },
  {
    title: "Establishes a Competitive Edge",
    description: `A polished website differentiates your business, anchoring its digital identity and reflecting dedication.`,
  },
  {
    title: "Centralizes Control Over Content",
    description: `Unlike social media, a website offers total command over your content, letting you present your brand's story genuinely.`,
  },
];

const Reasons = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <h2>Reasons why your business needs a website</h2>
        </div>
        <Row>
          {cardContent.map((item, index) => (
            <Col md={6} lg={4} key={index} className="mb-2">
              <div className="reason-card">
                <div className="content">
                  <p className="logo">Digital Way</p>
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