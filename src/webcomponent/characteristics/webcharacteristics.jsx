import React from 'react';
import './webcharacteristics.css'; // Make sure to add some custom CSS for layout and styling

/*animated icon */

import Access from "../../assests/access.gif"
import Platform from "../../assests/platform.gif"
import Update from "../../assests/update.gif"
import Collobaration from "../../assests/collobaration.gif"

const featuresData = [
  {
    title: 'Accessibility',
    description:
      'Consider having an incredible tool or game accessible on the internet. With a web app, we’re not confined to a single device. Whether it’s our computer, tablet, or phone – essentially anything with a web browser – we can seamlessly use the app without the hassle of downloads or installations. Just we can open our browser and immerse ourselves in the experience.',
    icon:Access,
  },
  {
    title: 'Platform Independence',
    description:
      'Now, here’s the intriguing aspect – a web app doesn’t pick favourites. Regardless of whether we’re using a Windows computer, a sophisticated Mac, or a Linux machine, it adapts effortlessly. It’s like that laid-back friend who effortlessly connects with everyone. So, our preferred web app? It harmoniously operates on any of our devices, sans any complications.',
    icon: Platform,
  },
  {
    title: 'Updates',
    description:
      'All of us have experienced the manual effort of updating software. Web apps eliminate that concern. It’s akin to having a personal assistant for updates. The magic happens on the expansive internet server where the web app resides. Consequently, every time we launch the app, it feels like unwrapping a polished, updated version without any manual intervention. It’s enchanting – consistently fresh and novel.',
    icon: Update,
  },
  {
    title: 'Collaboration',
    description:
      'Now, visualize a scenario where we and our colleagues are collaboratively working on something remarkable. Certain web apps facilitate simultaneous engagement in a project, even if we’re dispersed geographically. It’s similar to a virtual gathering where everyone contributes their ideas. The advantage of it is the instantaneous visibility of any alterations or additions made by someone, fostering real-time collaboration, irrespective of our physical location.',
    icon: Collobaration,
  },
  
];

const Webcharacteristics = () => {
  return (
    <>
    <div className='text-center charhead'>Key Characteristics of Web App</div>
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

export default Webcharacteristics;
