import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    let navigate = useNavigate();
    
    const handleBack = () => {
        navigate(-1);
    }

  return (
    <Navbar sticky="top" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};