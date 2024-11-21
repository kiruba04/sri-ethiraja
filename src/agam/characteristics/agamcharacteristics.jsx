import React from 'react';

/*animated icon */

import Access from "../../assests/access.gif"
import Platform from "../../assests/platform.gif"
import Update from "../../assests/update.gif"
import Collobaration from "../../assests/collobaration.gif"

const featuresData = [
  {
    title: 'Centralized and Real-Time Data Management',
    description:
      'ERP systems in healthcare unify diverse data sources, including patient records, administrative details, and operational metrics, into a single, centralized platform. This integration ensures that all departments have access to accurate, up-to-date information in real time, promoting seamless communication and coordination.',
    icon:Access,
  },
  {
    title: 'Enhanced Resource Optimization',
    description:'ERP solutions automate essential tasks like inventory management, staff scheduling, and resource allocation, reducing waste and preventing shortages. By analyzing real-time data, these systems ensure that medical supplies, personnel, and equipment are available exactly when and where they are needed. ',
    icon: Platform,
  },
  {
    title: 'Integrated Analytics for Decision Support',
    description:'With built-in data analytics and reporting capabilities, ERP systems empower healthcare organizations to derive actionable insights from their data. These systems not only provide comprehensive reports but also support predictive analytics, enabling organizations to anticipate patient admission trends and optimize preventive care.',
    icon: Update,
  },
  {
    title: 'Customizable and Scalable Solutions',
    description:'ERP systems offer tailored solutions to meet the specific needs of healthcare organizations, whether they are hospitals, clinics, pharmaceutical firms, or insurance providers. Their modular design allows organizations to start with essential functions like patient management and later expand to include financial, inventory, or supply chain management as their requirements grow.',
    icon: Collobaration,
  },
  
];

const Agamcharacteristics = () => {
  return (
    <>
    <div className='text-center charhead mt-2'>Key Characteristics of Sri Agam Mithran</div>
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

export default Agamcharacteristics;
