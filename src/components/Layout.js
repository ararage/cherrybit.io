import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import confLogo from "../images/logo-48.png";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar
        className="transparentBG"
        brand={<img src={confLogo} />}
        alignLinks="left"
        centerLogo
        children={props.children}
        fixed
      >
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/services">
          <NavItem>Services</NavItem>
        </Link>
        <NavItem>Customers</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem href="components.html" />
      </Navbar>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
