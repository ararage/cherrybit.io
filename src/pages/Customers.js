import React from "react";

// Import Materialize
import { Row, Col, Card, CardTitle } from "react-materialize";
import MitzuImage from "../images/mitzu.jpg";
import MitzuImage1 from "../images/mitzu/06.png";
import MitzuImage2 from "../images/mitzu/10.png";
import MitzuImage3 from "../images/mitzu/11.png";

import MexGasImage from "../images/mexgas.jpg";
import KSRImage from "../images/ksr.png";
import LoveLemonsImage from "../images/lovelemons.png";

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
              title="Expo Mitzu Mobile App"
              reveal={
                <Row>
                  <Col s={4} className="indigo darken-3 white-text">
                    <img
                      class="materialboxed"
                      width="150"
                      height="300"
                      src={MitzuImage1}
                    />
                  </Col>
                  <Col s={4} className="indigo darken-3 white-text">
                    <img
                      class="materialboxed"
                      width="150"
                      height="300"
                      src={MitzuImage2}
                    />
                  </Col>
                  <Col s={4} className="indigo darken-3 white-text">
                    <img
                      class="materialboxed"
                      width="150"
                      height="300"
                      src={MitzuImage3}
                    />
                  </Col>
                </Row>
              }
            >
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  height="250"
                  width="600"
                  src={MitzuImage}
                />
              </div>
              <p>
                <a href="https://www.mitzu.com/">Mitzu Web Page</a>
              </p>
            </Card>
          </Col>
          <Col m={6} s={6}>
            <Card
              header={<CardTitle />}
              title="Mexgas (System Maintenance)"
              reveal={<p Under Construction />}
            >
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  height="250"
                  width="600"
                  src={MexGasImage}
                />
              </div>
              <p>
                <a href="http://mgi-ai.com/filiales/mex-gas-trading">
                  Mexgas Web Page
                </a>
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle />}
              title="KSR Bocinas Ecommerce"
              reveal={<p Under Construction />}
            >
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  height="250"
                  width="600"
                  src={KSRImage}
                />
              </div>
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
        <Row>
          <Col m={6} s={12}>
            <Card
              header={<CardTitle />}
              title="Love and Lemons (Ecommerce)"
              reveal={<p />}
            >
              <div class="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  height="250"
                  width="600"
                  src={LoveLemonsImage}
                />
              </div>
              <p>
                <a href="http://www.loveandlemons.mx/" target="_blank">
                  Love and Lemons Web Page
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
