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
import { isLogin, logOut } from '../../utils/authHelpers';
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
          {
            isLogin() ? (
              <>
                <NavItem>
                  <NavLink tag={Link} activeClassName="current" to="/dashboard" exact>Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-danger" activeClassName="current-danger" to="/" onClick={logOut} exact>Log Out</NavLink>
                </NavItem>
              </>
            )
              : (
                <>
                  <NavItem>
                    <NavLink tag={Link} activeClassName="current" to="/" exact>Login</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} activeClassName="current" to="/register">Register</NavLink>
                  </NavItem>
                </>
              )}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default OurNavbar;