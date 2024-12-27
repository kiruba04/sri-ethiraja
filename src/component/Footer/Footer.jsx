import React from "react";
import "./Footer.css"; // Assuming you've placed the styles in a separate CSS file
import { Link } from "react-router-dom";

import logo from '../../assests/set-logo.png'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Footer CTA Section */}
        <div className="footer-cta pt-4 pb-4">
          <div className="row">
            <div className="col-xl-3 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Operation Centre</h4>
                  <span>Phase I, 27, Apex enclave, airport road, Kurumbapalayam, Coimbatore – 641107.</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Head office</h4>
                  <span>4/338 A Gandhipuram South, Udumalpet, Tiruppur - 642154</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>9789570069, 9965662426</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>info@sriethirajatechnologies.com,  sriethirajatechnologies@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="footer-content pt-4 pb-4">
          <div className="row">
            {/* Footer Logo Section */}
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  
                    <img
                      src={logo}
                      className="img-fluid"
                      alt="logo"
                    />
                  
                </div>
                <div className="footer-text">
                  <p>
                  Crafting seamless digital experiences for web and app solutions.
                  </p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                </div>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/sri-agam-mithran">Sri Agam Mithran</Link>
      </li>
      <li>
        <Link to="/sap">SAP</Link>
      </li>
      <li>
        <Link to="/proman">Proman</Link>
      </li>
      <li>
        <Link to="/web-service">Web Service</Link>
      </li>
      
      <li>
        <Link to="/app-dev">App Service</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact</Link>
      </li>
     
     
      <li>
        <Link to="/templeerp">Temple ERP</Link>
      </li>
    </ul>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Location</h3>
                </div>

                <div
      style={{
        overflow: "hidden",
        resize: "none",
        maxWidth: "100%",
        width: "500px",
        height: "300px",
      }}
    >
      <div
        id="gmap-canvas"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          title="Google Map"
          style={{
            height: "100%",
            width: "100%",
            border: "0",
          }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Phase+I,+27,+Apex+enclave,+airport+road,+Kurumbapalayam,+Coimbatore+–+641107.&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
    </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved{" "}<span className="company-name">Sri Ethiraja Technologies</span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
