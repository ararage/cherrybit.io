import React from "react";

// Import Materialize
import { Slider, Slide, Caption } from "react-materialize";
import "./styles/SlideList.css";
import { slides } from "../Constants";

class SlidesList extends React.Component {
  render() {
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
