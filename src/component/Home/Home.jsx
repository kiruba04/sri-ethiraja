
import React, { useEffect, useRef } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 

const Carousel = () => {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const listRef = useRef(null);
  const carouselRef = useRef(null);
  const runningTimeRef = useRef(null);
  const runNextAutoRef = useRef(null); // Changed runNextAuto to useRef
  const navigate = useNavigate(); // Initialize useNavigate

  const timeRunning = 3000;
  const timeAutoNext = 9500;

  const showSlider = (type) => {
    const sliderItemsDom = listRef.current.querySelectorAll('.item');
    
    if (!carouselRef.current) return; // Check if carouselRef is available

    if (type === 'next') {
      listRef.current.appendChild(sliderItemsDom[0]);
      carouselRef.current.classList.add('next');
    } else {
      listRef.current.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      // Check if carouselRef is still available
      if (carouselRef.current) {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.remove('prev');
      }
    }, timeRunning);

    clearTimeout(runNextAutoRef.current);
    runNextAutoRef.current = setTimeout(() => {
      nextBtnRef.current?.click();
    }, timeAutoNext);

    resetTimeAnimation();
  };

  const resetTimeAnimation = () => {
    if (runningTimeRef.current) {
      runningTimeRef.current.style.animation = 'none';
      void runningTimeRef.current.offsetHeight; // Trigger reflow
      runningTimeRef.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  useEffect(() => {
    resetTimeAnimation();
    runNextAutoRef.current = setTimeout(() => {
      nextBtnRef.current?.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAutoRef.current); // Clear any running timers on unmount
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {[{ link:'/templeerp',  name: 'Temple Management System', image: 'https://i1.wp.com/vak1969.com/wp-content/uploads/2017/01/sri-ekambaranathar-temple-kanchipuram-tamil-nadu.jpg?ssl=1',details:"Temple Management Software is used to simplify the management of all temple-related activities. Our software provides comprehensive features to help you manage temple membership, donations, events, accounting and more. Our user-friendly interface allows you to access all the information you need to manage your temple efficiently." }, 
          { link:'/sap',name: 'SAP', image: 'https://runibex.com/wp-content/uploads/2020/10/runibex-technology_1474696694-scaled.jpg',details:"As a global leader in enterprise applications and business AI, SAP  stands at the nexus of business and technology. For over 50 years, organisations have trusted SAP  to bring out their best by uniting business-critical operations spanning finance, procurement, HR, supply chain, and customer experience."},
          { link:'/proman',name: 'PROMAN (Production Management System)', image: 'https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/971/2022/09/Smart-Manufacturing-Plant-iStock-1367617035.jpg',details:"A SAAS(Software-as-a-Service) model production management ERP, is a comprehensive production management software that integrates various core processes and functions within a manufacturing organization into a single system. It allows for streamlined data flow and facilitates efficient communication between departments. " },
          { link:'/sri-agam-mithran',name: 'Sri Agam Mithran', image: 'https://res.cloudinary.com/dsgdnskfj/image/upload/v1732032964/Hospital-Management-System_xanl1m.jpg',details:"ERP in healthcare industry integrates various processes into a unified system, optimizing data management, resource allocation, and decision-making. This centralized approach fosters efficient communication and collaboration, with tailored systems addressing specific industry needs and functions to enhance overall organizational efficiency." },
          { link:'/templeerp',  name: 'Temple Management System', image: 'https://i1.wp.com/vak1969.com/wp-content/uploads/2017/01/sri-ekambaranathar-temple-kanchipuram-tamil-nadu.jpg?ssl=1',details:"Temple Management Software is used to simplify the management of all temple-related activities. Our software provides comprehensive features to help you manage temple membership, donations, events, accounting and more. Our user-friendly interface allows you to access all the information you need to manage your temple efficiently." },
          { link:'/sap',name: 'SAP', image: 'https://runibex.com/wp-content/uploads/2020/10/runibex-technology_1474696694-scaled.jpg',details:"As a global leader in enterprise applications and business AI, SAP  stands at the nexus of business and technology. For over 50 years, organisations have trusted SAP  to bring out their best by uniting business-critical operations spanning finance, procurement, HR, supply chain, and customer experience."},
          { link:'/proman',name: 'PROMAN', image: 'https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/971/2022/09/Smart-Manufacturing-Plant-iStock-1367617035.jpg',details:"A SAAS(Software-as-a-Service) model production management ERP, is a comprehensive production management software that integrates various core processes and functions within a manufacturing organization into a single system. It allows for streamlined data flow and facilitates efficient communication between departments. " },
          { link:'/sri-agam-mithran',name: 'Sri Agam Mithran', image: 'https://res.cloudinary.com/dsgdnskfj/image/upload/v1732032964/Hospital-Management-System_xanl1m.jpg',details:"ERP in healthcare industry integrates various processes into a unified system, optimizing data management, resource allocation, and decision-making. This centralized approach fosters efficient communication and collaboration, with tailored systems addressing specific industry needs and functions to enhance overall organizational efficiency." },
      ].map((item, index) => (
          <div key={index} className="item" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des"><p>{item.details}</p></div>
              <div className="btn">
                <button onClick={() => navigate(`${item.link}`)}>See More</button>
                <button onClick={() => navigate('/contact-us')}>Request Demo</button> 
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" ref={prevBtnRef} onClick={() => showSlider('prev')}>{'<'}</button>
        <button className="next" ref={nextBtnRef} onClick={() => showSlider('next')}>{'>'}</button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
};

export default Carousel;
