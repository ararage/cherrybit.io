import React from "react";

// Import Materialize
import { Row, Col, Card, CardTitle } from "react-materialize";
import { customers } from "../Constants";
import ImageZoom from "react-medium-image-zoom";

class Customers extends React.Component {
  render() {
    return (
      <div>
        <Row>
          {customers.map(customer => {
            return (
              <Col m={6} s={12}>
                <Card
                  header={<CardTitle />}
                  title={customer.title}
                  reveal={
                    <Row>
                      {customer.reveal.map(capture => {
                        return (
                          <Col
                            s={customer.s}
                            className="indigo darken-3 white-text"
                          >
                            <ImageZoom
                              image={{
                                src: capture,
                                alt: "Golden Gate Bridge",
                                className: "img",
                                style: { width: customer.width }
                              }}
                              zoomImage={{
                                src: capture,
                                alt: "Golden Gate Bridge"
                              }}
                            />
                          </Col>
                        );
                      })}
                    </Row>
                  }
                >
                  <div className="card-image waves-effect waves-block waves-light">
                    <img
                      className="activator"
                      height="250"
                      width="600"
                      src={customer.image}
                    />
                  </div>
                  <p>
                    <a href={customer.urlPage} target="_blank">
                      {customer.urlLabel}
                    </a>
                  </p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Customers;
