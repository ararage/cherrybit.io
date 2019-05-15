import React from "react";

// Import Materialize
import { Collapsible, CollapsibleItem } from "react-materialize";

class Services extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col m12 s12">
            <h3>What we love to do?</h3>
            <Collapsible popout>
              <CollapsibleItem
                header="Develop ideas for your business"
                icon="free_breakfast"
                expanded
              >
                <div class="card">
                  <div class="card-content">
                    <p>
                      From internal services for your organization to public
                      mobile applications, let´s talk
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
              <CollapsibleItem
                header="Cloud Services with AWS"
                icon="filter_drama"
              >
                <div class="card">
                  <div class="card-content">
                    <p>
                      We prefer to mount everything in the Cloud, because the
                      future is now!
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
              <CollapsibleItem header="Mobile Development" icon="phone_android">
                <div class="card">
                  <div class="card-content">
                    <p>
                      Cross-Platform Mobile App Development with Ionic and React
                      Native
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
              <CollapsibleItem
                header="Multiple technologies"
                icon="format_shapes"
              >
                <div class="card">
                  <div class="card-content">
                    <p>
                      We love to use the latest technologies, such as React,
                      Python, NodeJS, etc
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
              <CollapsibleItem header="Brainstorming" icon="question_answer">
                <div class="card">
                  <div class="card-content">
                    <p>
                      Ideas, monthly meetings and continuous delivery for you!
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
              <CollapsibleItem
                header="From a simple web page to a distribuited system"
                icon="timeline"
              >
                <div class="card">
                  <div class="card-content">
                    <p>
                      We can develop a web page, a mobile app, a CRM, a reports
                      system, etc ... Whatever you want we can take a look
                    </p>
                  </div>
                </div>
              </CollapsibleItem>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
