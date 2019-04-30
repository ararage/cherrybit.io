import React from "react";

// Import Materialize
import { Parallax } from "react-materialize";

import parallax1 from "../images/parallax-1.jpeg";
import parallax2 from "../images/parallax-2.jpg";

function ParallaxList() {
  const parallaxes = [
    {
      title: "Our Location",
      subtitle:
        "We are located at Mexico City (CDMX), so there's no problem with us for North America and Central / South America time zones.",
      img: parallax1,
      h2className: "black-text header",
      pclassName: "black-text text-lighten-3 lighten-3"
    },
    {
      title: "Multiple Solutions",
      subtitle:
        "CherryBit provides end-to-end software development using the latest technologies such as NodeJS, Python, React, etc. ",
      img: parallax2,
      h2className: "red-text header",
      pclassName: "red-text text-lighten-3 lighten-3"
    }
  ];
  return (
    <div>
      {parallaxes.map(parallax => {
        return (
          <Parallax image={<img src={parallax.img} />}>
            <div className="section transparentBG">
              <div className="row container">
                <h2 className={parallax.h2className}>{parallax.title}</h2>
                <p className={parallax.pclassName}>{parallax.subtitle}</p>
              </div>
            </div>
          </Parallax>
        );
      })}
    </div>
  );
}

export default ParallaxList;
