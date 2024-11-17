
import React from 'react';


/*animated icon */
import Interact from "../../assests/interact.gif"
import Sharing from "../../assests/sharing.gif"
import Speed from "../../assests/speedometer.gif"
import Connection from "../../assests/connection.gif"

const featuresData = [
  {
    title: 'User-Friendly Interface',
    description:
      'A user-friendly interface is the cornerstone of any successful application, ensuring a seamless and enjoyable user experience. It emphasizes simplicity and clarity, enabling users to navigate effortlessly without prior training or instruction. Intuitive design principles guide the placement of elements, making interactions logical and efficient.',
    icon:Interact,
  },
  {
    title: 'Platform Compatibility',
    description:
      'Platform compatibility is essential for ensuring an application performs seamlessly across different devices and operating systems. It involves designing solutions that cater to various platforms, such as iOS, Android, and web browsers, while maintaining consistent functionality and user experience. Native apps take advantage of platform-specific features for optimized performance, while hybrid and web-based apps ensure broader accessibility with a single codebase.',
    icon: Sharing,
  },
  {
    title: 'Performance and Speed',
    description:
      'Performance and speed are critical factors in delivering a reliable and satisfying user experience. Applications must load quickly, operate smoothly, and respond promptly to user actions to meet modern expectations. Efficient coding practices, optimized algorithms, and resource management play a pivotal role in achieving these goals. Minimizing lag, ensuring stability during high traffic or complex operations, and reducing unnecessary load times are key priorities',
    icon: Speed,
  },
  {
    title: 'Connectivity',
    description:
      'Connectivity is a vital component of modern applications, enabling seamless interaction and integration with online services and other platforms. It ensures real-time updates, synchronization across multiple devices, and smooth data exchange, keeping users engaged and informed. Features like cloud integration, API connectivity, and live notifications enhance the applications interactivity and functionality. Robust connectivity also supports collaboration, remote access, and cross-platform usability.',
    icon: Connection,
  },
  
];

const Feature= () => {
  return (
    <>
    <div className='text-center charhead mt-2'>Key Characteristics of Web service</div>
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

export default Feature;
