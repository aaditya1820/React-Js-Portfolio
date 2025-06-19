import React from 'react';
import { Navbar as BSNavbar, Nav, Container, Button } from 'react-bootstrap';

function Navbar({ onNavigate, onLogout }) {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
          MyPortfolio
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onNavigate('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => onNavigate('about')}>About</Nav.Link>
            <Nav.Link onClick={() => onNavigate('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => onNavigate('contact')}>Contact</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={onLogout}>
            Logout
          </Button>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;


