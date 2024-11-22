import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Cards.css";
import vision from "../../assests/visionpng.png";
import mission from "../../assests/missionpng.png";

function Cards() {
  const [activeCard, setActiveCard] = useState("vision");
  const [animationClass, setAnimationClass] = useState("");
  const headingRef = useRef(null);

  // Memoize the switchCard function to avoid recreation
  const switchCard = useCallback(
    (card) => {
      if (activeCard !== card) {
        
        setAnimationClass("fade-out-left");
        setTimeout(() => {
          setActiveCard(card);
          
          setAnimationClass("fade-in-right");
        }, 500);
      }
    },
    [activeCard]
  );
  
  

  // Automatic switching every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextCard = activeCard === "vision" ? "mission" : "vision";
      switchCard(nextCard);
    }, 10000); // Switch every 10 seconds
    return () => clearInterval(interval);
  }, [activeCard, switchCard]); // Add switchCard to dependencies

  return (
    <div className="container mt-3 cardcontainer" id="about">
      <div ref={headingRef} className="heading">Who we are?</div>
 
      <div className="row">
        {/* Vision and Mission Cards */}
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="buttons">
        <button className={`custom-btn-card ${activeCard === 'vision' ?"custom-btn-card-active":"" }`}onClick={() => switchCard("vision")}>
          Vision
        </button>
        <button className={`custom-btn-card ${activeCard === 'mission' ?"custom-btn-card-active":"" }` } onClick={() => switchCard("mission")}>
          Mission
        </button>
      </div>
        <div
          className={` mb-4 card-wrapper ${animationClass}`}
          onAnimationEnd={() => setAnimationClass("")} // Reset animation class
        >

          {activeCard === "vision" && (
             <div className="card1">
             <div>
                  <p className="card1-title">VISION</p>
                  <p className="small-desc">
                  To help accelerate business growth for our clients by enabling digital transformation at scale!
                  </p>
                  </div>
                  <div>
                  <img src={vision} alt="hi" className="cardimg"/>
                  </div>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
          )}
          {activeCard === "mission" && (
            <div className="card1">
            <div>
                 <p className="card1-title">MISSION</p>
                 <p className="small-desc">
                 Be a true strategic partner in our client’s IT-enabled growth roadmap by leveraging our expertise across industry domains.
                 </p>
                 </div>
                 <div>
                 <img src={mission} alt="Mission Illustration" className="cardimg"/>
                 </div>
                 <div className="go-corner">
                   <div className="go-arrow">→</div>
                 </div>
               </div>
          )}
        </div>
        </div>
        <div className="col-lg-6">
            <img src="https://walulel.com/images/walulel-about-us.png" alt ="work" className="img-erp"/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
