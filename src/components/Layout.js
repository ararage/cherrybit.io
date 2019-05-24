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
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/contact">Contact</Link>
      </Navbar>
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
