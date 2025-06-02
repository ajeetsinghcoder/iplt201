import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">MyWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            {/* Home Dropdown */}
            <NavDropdown title="Home" id="home-dropdown">
              <NavDropdown.Item href="#home/1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#home/2">Home 2</NavDropdown.Item>
            </NavDropdown>

            {/* About Dropdown */}
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="#about/team">Team</NavDropdown.Item>
              <NavDropdown.Item href="#about/company">Company</NavDropdown.Item>
            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item href="#services/design">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#services/dev">Development</NavDropdown.Item>
              <NavDropdown.Item href="#services/seo">SEO</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Dropdown */}
            <NavDropdown title="Contact" id="contact-dropdown">
              <NavDropdown.Item href="#contact/email">Email</NavDropdown.Item>
              <NavDropdown.Item href="#contact/phone">Phone</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;