import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import './navbar.css';  

export const NavBar = () => {   
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Navbar sticky="top" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className={isHome ? 'active' : ''} to="/">Home</Link>
            <Link to="/blog" className={!isHome ? 'active' : ''}>Blog</Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};