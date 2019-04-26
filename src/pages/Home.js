import React from "react";

// Import Materialize
import SlidesList from "../components/SlidesList";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  render() {
    return <SlidesList />;
  }
}

export default Home;
