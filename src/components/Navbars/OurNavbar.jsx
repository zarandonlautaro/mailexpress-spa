import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logoMailExpress from '../../assets/img/logoMailExpress.png';

const OurNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">
        <img src={logoMailExpress} alt="" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} activeClassName="current" to="/" exact>Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} activeClassName="current" to="/register">Register</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default OurNavbar;