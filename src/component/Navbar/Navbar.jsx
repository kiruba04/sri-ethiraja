import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assests/set-logo.png'

import './navbar.css'



function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='nav' sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
            src={logo}
            alt="MyBrand Logo"
            width="120"      // Adjust the width to your preference
            height="80"     // Adjust the height to your preference
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link
         href="#about"
           onClick={(e) => {
             e.preventDefault();
             const target = document.getElementById("about");
           if (target) {
            const yOffset = -80; // Offset by 20px above the element
           const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: "smooth" });
       }
      }}
      >
        About
        </Nav.Link>
            <NavDropdown title="Product" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/proman">Proman</NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/sri-agam-mithran">Sri Agam Mithran</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/templeerp">Temple Management System</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servies" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sap">SAP Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/web-service">Web Service</NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/app-dev">App Devlopment</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav> 
          <Nav.Link as={Link} to="/contact-us" className="btn btn-grad">
            Contact Us <FontAwesomeIcon icon={faHeadset} /> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
