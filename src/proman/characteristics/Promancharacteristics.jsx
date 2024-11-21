import React from 'react';

/*animated icon */

import Access from "../../assests/access.gif"
import Platform from "../../assests/platform.gif"
import Update from "../../assests/update.gif"
import Collobaration from "../../assests/collobaration.gif"

const featuresData = [
  {
    title: 'Comprehensive Integration',
    description:
      'ProMan unifies key manufacturing processes such as inventory, purchasing, production planning, material management, and scheduling, ensuring seamless data flow and collaboration across departments.',
    icon:Access,
  },
  {
    title: 'Cloud-Based Accessibility',
    description:'As a SaaS model, ProMan offers users the flexibility to access the application from anywhere, anytime, without the need for extensive infrastructure, minimizing costs and maintenance efforts.',
    icon: Platform,
  },
  {
    title: 'Automation and Efficiency',
    description:'Automates repetitive tasks to enhance productivity, reduce manual errors, and optimize workflows, leading to increased operational efficiency.',
    icon: Update,
  },
  {
    title: 'Robust Analytics and Decision Support',
    description:'Equipped with advanced dashboards, reporting tools, and analytics, ProMan empowers organizations with real-time insights to facilitate data-driven decision-making.',
    icon: Collobaration,
  },
  
];

const promancharacteristics = () => {
  return (
    <>
    <div className='text-center charhead mt-2'>Key Characteristics of Proman</div>
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

export default promancharacteristics;
