import React from "react";

// Import Materialize
import { Row, Col, Card, CardTitle, MediaBox } from "react-materialize";
import MitzuImage from "../images/mitzu.jpg";
import MitzuImage1 from "../images/mitzu/01.png";
import M from "materialize-css";

class Customers extends React.Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <Row>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle />}
              title="Expo Mitzu App"
              reveal={
                <Row>
                  <Col s={4}>
                    <img
                      class="materialboxed"
                      width="150"
                      height="300"
                      src={MitzuImage1}
                    />
                  </Col>
                  <Col s={4} className="teal white-text">
                    a
                  </Col>
                  <Col s={4} className="teal white-text">
                    b
                  </Col>
                </Row>
              }
            >
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={MitzuImage} />
              </div>
              <p>
                <a href="https://www.mitzu.com/">Mitzu Web Page</a>
              </p>
            </Card>
          </Col>
          <Col m={6} s={6}>
            <Card header={<CardTitle />} title="Mexgas" reveal={<p />}>
              <p>
                <a href="http://mgi-ai.com/filiales/mex-gas-trading">
                  Web Page
                </a>
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Card header={<CardTitle />} title="KSR Bocinas" reveal={<p />}>
              <p>
                <a href="https://baflesksr.com/">Web Page</a>
              </p>
            </Card>
          </Col>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle />}
              title="Ramirez Arambula Altamarino Abogados S.C."
              reveal={<p />}
            >
              <p>
                <a
                  href="https://www.ramirezarambulaaltamiranoabogadossc.com.mx/index.html"
                  target="_blank"
                >
                  Web Page
                </a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Customers;
