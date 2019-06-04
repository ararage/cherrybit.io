import React from "react";

// Import Materialize
import { Parallax } from "react-materialize";

import "./styles/Parallax.css";

import { parallaxes } from "../Constants";

function ParallaxList() {
  return (
    <div>
      {parallaxes.map(parallax => {
        return (
          <Parallax
            key={parallax.title}
            image={<img src={parallax.img} alt={parallax.title} />}
          >
            <div className="section indigo lighten-5">
              <div className="row container">
                <h2>{parallax.title}</h2>
                <p>{parallax.subtitle}</p>
              </div>
            </div>
          </Parallax>
        );
      })}
    </div>
  );
}

export default ParallaxList;
