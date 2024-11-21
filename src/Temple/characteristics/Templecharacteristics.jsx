import React from 'react';

/*animated icon */

import Access from "../../assests/access.gif"
import Platform from "../../assests/platform.gif"
import Update from "../../assests/update.gif"
import Collobaration from "../../assests/collobaration.gif"

const featuresData = [
  {
    title: 'Intuitive User Interface',
    description:
      `Our website boasts a simple, clean, and user-friendly design that ensures easy navigation. Whether you're managing donations, scheduling events, or tracking memberships, users can quickly find what they need without any technical expertise.`,
    icon:Access,
  },
  {
    title: 'Comprehensive Features',
    description:'The website highlights the extensive capabilities of our Temple Management Software, such as financial management, donation tracking, abhishekam and pooja scheduling, inventory management, and staff payroll. These features are seamlessly integrated into the website, allowing temple administrators to perform tasks efficiently.',
    icon: Platform,
  },
  {
    title: 'Real-Time Reporting & Analytics',
    description:'Our website showcases real-time reporting tools, including financial statements, membership reports, and donor information. With just a few clicks, administrators can generate and analyze data to ensure smooth operations and informed decision-making.',
    icon: Update,
  },
  {
    title: 'Mobile-Friendly & Cloud-Based',
    description:'The website is fully optimized for mobile devices, allowing users to manage temple operations from anywhere, at any time. As a cloud-based solution, it ensures secure data storage and accessibility, providing peace of mind to temple staff and administrators.',
    icon: Collobaration,
  },
  
];

const Templecharacteristics = () => {
  return (
    <>
    <div className='text-center charhead mt-2'>Key Characteristics of Temple ERP</div>
    <div className=" container features-container">
      {featuresData.map((feature, index) => (
        
        <div key={index} className="feature-card ">
            <div className='row'>
            <div className='col-lg-2'>
          <img src={feature.icon} className="feature-icon" alt='icon'/>
          </div>
          <div className='col-lg-10'>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
          </div>
        </div>
        </div>

      ))}
    </div>
    </>
  );
};

export default Templecharacteristics;
