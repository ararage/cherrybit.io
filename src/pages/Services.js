import React from "react";

// Import Materialize
import {
  Collapsible,
  CollapsibleItem,
  Card,
  CardTitle
} from "react-materialize";

class Services extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col m6 s12">
            <h3>What we love to do?</h3>
            <Collapsible popout>
              <CollapsibleItem
                header="Develop ideas for your business"
                icon="free_breakfast"
              >
                Let's take a cup of coffee and talk about your new idea or a
                problem in your actual business place
              </CollapsibleItem>
              <CollapsibleItem
                header="Cloud Services with AWS"
                icon="filter_drama"
              >
                Managing cloud infraestructure with RDS, EC2, ELB, S3
              </CollapsibleItem>
              <CollapsibleItem header="Mobile Development" icon="phone_android">
                Cross-Platform Mobile App Development with Ionic and React
                Native
              </CollapsibleItem>
              <CollapsibleItem
                header="Multiple technologies"
                icon="format_shapes"
              >
                We love to use the latest technologies, such as React, Python,
                NodeJS, etc
              </CollapsibleItem>
              <CollapsibleItem header="Brainstorming" icon="question_answer">
                Ideas, monthly meetings and continuous delivery for you!
              </CollapsibleItem>
              <CollapsibleItem
                header="From a simple web page to a distribuited system"
                icon="timeline"
              >
                We can develop a web page, a mobile app, a CRM, a reports
                system, etc ... Whatever you want we can take a look
              </CollapsibleItem>
            </Collapsible>
          </div>
          <div class="col m6 s12">
            <h3>How we do!</h3>
            <Card header={<CardTitle />} actions={[<a />]}>
              Here is the standard card with an image thumbnail.
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
