import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const OurNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">MailExpress</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default OurNavbar;