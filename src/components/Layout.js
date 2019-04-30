import React from "react";
import { Navbar, NavItem } from "react-materialize";
import confLogo from "../images/logo-48.png";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar
        className="transparentBG"
        brand={<img src={confLogo} />}
        centerLogo
        alignLinks="right"
      >
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem href="components.html" />
      </Navbar>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
