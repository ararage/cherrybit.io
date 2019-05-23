import React from "react";

// Import Materialize
import { Footer } from "react-materialize";

function FooterComponent() {
  return (
    <Footer
      copyrights="© Copyright CherryBit.io 2019"
      moreLinks={<a />}
      links={<ul />}
      className="example"
    >
      <h5 className="white-text">CherryBit.io</h5>
      <p className="grey-text text-lighten-4" />
    </Footer>
  );
}

export default FooterComponent;
