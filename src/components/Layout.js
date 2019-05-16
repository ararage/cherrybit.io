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
      >
        <Link to="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link to="/services">
          <NavItem>Services</NavItem>
        </Link>
        <Link to="/customers">
          <NavItem>Customers</NavItem>
        </Link>
        <NavItem>Contact</NavItem>
        <NavItem href="components.html" />
      </Navbar>
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
