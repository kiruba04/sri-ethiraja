import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Reasons.css'

const cardContent = [
  {
    title: "Elevate Your Brand with a Website",
    description: `A well-crafted website doesn’t just showcase your brand — it elevates it. Intuitive design, responsive performance, and polished visuals convey professionalism, building trust and engagement. In today’s digital age, your website is a reflection of your commitment to quality, inspiring confidence and driving customer loyalty.`,
  },
  {
    title: "Increases Brand Awareness",
    description: `Your website is your brand's mirror, showcasing its identity and values. Every design element, from fonts to content, shapes your unique personality, setting you apart from competitors. A strong, memorable online presence breaks barriers, extending your reach far beyond local limits.`,
  },
  {
    title: "Provides 24/7 Accessibility and Convenience",
    description: `Unlike a brick-and-mortar store with set operating hours, your website operates around the clock, offering products, services, and vital information without constraints.`,
  },
  {
    title: "Enhances Customer Engagement",
    description: `Interactive website features transform visitors from passive viewers into engaged participants and loyal customers. Blogs, portfolios, and feedback forms boost engagement by showcasing expertise and collecting user input. Encouraging actions like purchases, feedback, or forum participation fosters connection, turning customers into repeat buyers and enthusiastic brand advocates, driving growth and loyalty.`,
  },
  {
    title: "Enables Data Collection and Analysis",
    description: `Every interaction on your website reveals insights into your audience's preferences and behavior. Tools like Google Analytics help track traffic, popular content, and navigation paths, enabling data-driven decisions to refine strategies. This responsiveness enhances engagement and retention, ensuring your business stays aligned with customer needs.`,
  },
  {
    title: "Amplifies Search Visibility Through SEO",
    description: `Following SEO best practices boosts your brand’s visibility. By creating valuable content, using relevant keywords, and optimizing for mobile, you improve search engine rankings. An optimized site signals relevance and authority, increasing organic traffic and enhancing credibility. With most users staying on the first search results page, SEO ensures your business stays front and center for potential customers.`,
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
    description: `Owning a website gives you full control over your content, unlike social media with its character limits and algorithm changes. You shape everything — from content depth and imagery to navigation paths. This control lets you guide visitors seamlessly to key actions, presenting your brand’s story authentically and effectively, ensuring your website fulfills its purpose of engaging and converting leads.`,
  },
];

const Reasons = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <div className='charhead'>Reasons why your business needs a website</div>
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