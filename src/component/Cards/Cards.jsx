import React, { useRef } from 'react';
import './Cards.css';
import vision from "../../assests/visionpng.png";
import mission from "../../assests/missionpng.png";

function Cards() {
    const headingRef = useRef(null);

 

    return (
        <div className="container mt-3 cardcontainer">
            <h2 ref={headingRef} className="heading">What we are</h2>
            <div className="row">
                {/* Vision Card */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card1">
                        <div className="cardhead"> OUR VISION </div>
                        <img className="cardimg" src={vision} alt="vission.png"/>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 topslight">
                    <div className="card2">
                        <div className="cardhead"> OUR MISSION</div>
                        <img className="cardimg" src={mission} alt="goal.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
