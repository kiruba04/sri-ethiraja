import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const cardContent = [
  {
    title: "Efficient Management of Operations",
    description: `A Temple Management System helps to automate different tasks, such as managing donations, tracking inventory, scheduling events and managing finances. This increases efficiency and productivity as temple staff can focus on more critical tasks, such as engaging with devotees.`,
  },
  {
    title: "Improved Donor Management",
    description: `Temple Management Software provides a centralized database of donor information that the temple staff can easily access. This helps better track donations and personalized communication with donors, which can help increase contributions and maintain strong relationships with donors.`,
  },
  {
    title: "Accurate Financial Management",
    description: `Temple Management ERP System provides features to manage temple finances, including tracking expenses, generating financial reports and caring accounting tasks. This helps to ensure that the temple's finances are accurate, which is essential for maintaining the trust of the devotees.`,
  },
  {
    title: "Enhanced Security and Privacy",
    description: `A Hindu Temple Management Software from Genius ERP System helps ensure the temple's data is secure and safe, as authorized personnel can access it. Enhanced Security and Privacy help to prevent data breaches and ensures the privacy of the temple's data.`,
  },
  {
    title: "Saves Time and Effort",
    description: `Temple Management Software eliminates manual record-keeping and paperwork, saving temple staff time and effort and allowing them to focus on other essential tasks. In addition, this system helps everyone manage their time as the paperwork gets reduced.`,
  },
  {
    title: "Streamlined Inventory Management",
    description: `Temple Management System Software helps to track inventory, including managing stock levels, reordering items and monitoring usage. Streamlined Inventory Management helps to ensure that the temple has the necessary supplies to carry out its operations and that there is no waste of resources.`,
  },
  {
    title: "Online Donation & Payment Information System",
    description: ` Earlier perceived transaction security problems using credit cards and online banking have been addressed by providers. Payment mechanisms such as MasterCard Secure Code and Verified by Visa have been developed and implemented and banking systems security addressed. `,
  },
  {
    title: " Pooja Management System",
    description: `The System is basically used for keeping track of devotee’s who had registered themselves for Pooja. The Pooja is of Different type viz., Special Days, all important days. `,
  },
  {
    title: "Pooja Information Display System",
    description: `Due to its one touch operation, even common man can navigate through the contents by just touching the screen and there is no need to worry about the complexities of using keyboard or mouse.`,
  },
];

const Reasons = () => {
    return (
      <Container className='mt-4'>
        <div className='mb-4'>
          <div className='charhead'>Reasons why your Temple needs a ERP</div>
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