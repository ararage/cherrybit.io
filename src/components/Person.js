// React
import React from "react";

// Materializecss
import M from "materialize-css";

// Icons
import { FaLinkedinIn, FaTwitter, FaGithub, FaMailBulk } from "react-icons/fa";

// Constants
import { people } from "../Constants";

class Person extends React.Component {
  async copySomething(text) {
    try {
      const toCopy = text;
      await navigator.clipboard.writeText(toCopy);
      M.toast({ html: "Email copied to clipboard" });
    } catch (err) {
      M.toast({ html: "Failed to copy" });
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          {people.map(p => {
            return (
              <div key={p.email} className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="card-content">
                    <p className="card-title">{p.name}</p>
                    <div className="row">
                      <div className="col s12 m3">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3>
                            <FaGithub />
                          </h3>
                        </a>
                      </div>
                      <div className="col s12 m3">
                        <a
                          href={p.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3>
                            <FaLinkedinIn />
                          </h3>
                        </a>
                      </div>
                      <div className="col s12 m3">
                        <a
                          href={p.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3>
                            <FaTwitter />
                          </h3>
                        </a>
                      </div>
                      <div className="col s12 m3">
                        <h3>
                          <FaMailBulk
                            onClick={() => this.copySomething(p.email)}
                          />
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

export default Person;
