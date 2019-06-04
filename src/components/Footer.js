import React from "react";
import { Link } from "react-router-dom";

function FooterComponent() {
  return (
    <footer className="page-footer grey darken-1">
      <div className="container">
        <div className="row">
          <div className="col l4 offset-l0 s4">
            <h5 className="white-text">Cherry</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/customers">
                  Customers
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2019 CherryBit.io
          <Link className="grey-text text-lighten-4 right" to="/">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
