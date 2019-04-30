import React from "react";

// Import Materialize
import SlidesList from "../components/SlidesList";
import ParallaxList from "../components/Parallax";
import FooterComponent from "../components/Footer";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  render() {
    return (
      <div>
        <SlidesList />
        <ParallaxList />
        <FooterComponent />
      </div>
    );
  }
}

export default Home;
