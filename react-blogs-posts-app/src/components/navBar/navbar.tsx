import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import './navbar.css';  

export const NavBar = () => {   
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useTranslation();

  return (
    <Navbar sticky="top" expand="md">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className={isHome ? 'active' : ''} to="/">{t('navbar.home')}</Link>
            <Link to="/blog" className={!isHome ? 'active' : ''}>{t('navbar.blog')}</Link> 
            <LanguageSwitcher /> 
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};