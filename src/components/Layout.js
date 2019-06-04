import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import confLogo from "../images/logo-48.png";
import FooterComponent from "../components/Footer";
import "./styles/Layout.css";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar
        className="grey darken-1"
        brand={<img src={confLogo} alt={confLogo} />}
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
      <FooterComponent />
    </React.Fragment>
  );
}

export default Layout;
