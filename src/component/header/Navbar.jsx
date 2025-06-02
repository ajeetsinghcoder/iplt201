import React from 'react';
import { Navbar, Nav, Container, NavDropdown , Form, Button } from 'react-bootstrap';
import ipllogo from "../../asstes/images/ipl-logo.png";
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
      <img
        src={ipllogo} 
        alt="Logo"
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='custom-navbars'>
          <Nav className="ms-auto">

            {/* Home Dropdown */}
            <NavDropdown title="Home" id="home-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#home/1">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#home/2">Home 2</NavDropdown.Item>
            </NavDropdown>

            {/* About Dropdown */}
            <NavDropdown title="About" id="about-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#about/team">Team</NavDropdown.Item>
              <NavDropdown.Item href="#about/company">Company</NavDropdown.Item>
            </NavDropdown>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#services/design">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#services/dev">Development</NavDropdown.Item>
              <NavDropdown.Item href="#services/seo">SEO</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Dropdown */}

            <NavDropdown title="Contact" id="contact-dropdown" className="custom-dropdown">
              <NavDropdown.Item href="#contact/email">Email</NavDropdown.Item>
              <NavDropdown.Item href="#contact/phone">Phone</NavDropdown.Item>
            </NavDropdown>

            {/* Direct Contact Links (No Dropdown) */}
            <Nav.Link href="#contact"><i class="fa-solid fa-users-viewfinder" style={{color: 'gold', fontSize: '24px', marginRight: '8px'}}></i></Nav.Link>

            {/* search box */}

          </Nav>
           <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;