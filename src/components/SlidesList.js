import React from "react";

// Import Materialize
import { Slider, Slide, Caption } from "react-materialize";
import "./styles/SlideList.css";

import splash1 from "../images/splash-1.jpg";
import splash2 from "../images/splash-2.jpg";
import splash3 from "../images/splash-3.jpg";
import splash4 from "../images/splash-4.jpg";

class SlidesList extends React.Component {
  render() {
    const slides = [
      {
        title: "We're passionate",
        subtitle: "About what we do ",
        img: splash1,
        placement: "left"
      },
      {
        title: "Always thinking in the future",
        subtitle: "Step by step reaching your goals",
        img: splash4
      },
      {
        title: "We launch your solution to the stars and beyond!",
        subtitle: "To the cloud!",
        img: splash3,
        placement: "right"
      },
      {
        title: "People First",
        subtitle:
          "We think people it's more important than anything else in the world",
        img: splash2
      }
    ];
    return (
      <div className="slider-back">
        <Slider>
          {slides.map(slide => {
            return (
              <Slide key={slide.title} image={<img src={slide.img} />}>
                <Caption placement={slide.placement}>
                  <h3>{slide.title}</h3>
                  <h5 className="light grey-text text-lighten-3">
                    {slide.subtitle}
                  </h5>
                </Caption>
              </Slide>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default SlidesList;
