import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assests/set-logo.png'

import './navbar.css'
import { useNavigate } from 'react-router-dom';

function MyNavbar() {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const target = document.getElementById("about");
    if (target) {
      const yOffset = -80; // Offset for the sticky navbar
      const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="nav" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="MyBrand Logo"
            width="120"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                const currentPath = window.location.pathname;
                if (currentPath !== "/") {
                  navigate("/", { replace: true });
                  setTimeout(scrollToAbout, 100); // Wait for the navigation to complete
                } else {
                  scrollToAbout();
                }
              }}
            >
              About Us
            </Nav.Link>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/proman">Proman</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sri-agam-mithran">Sri Agam Mithran</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/templeerp">Temple Management System</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sap">SAP Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/web-service">Web Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/app-dev">App Development</NavDropdown.Item>
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