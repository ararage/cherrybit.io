import React from "react";
import Form from "../components/Form";
import Person from "../components/Person";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1>Lets Talk</h1>
              <Form />
            </div>
            <div className="col s12">
              <h1>Or email us directly</h1>
              <Person />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
