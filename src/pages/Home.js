import React from "react";

// Import Materialize
import ParallaxList from "../components/Parallax";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  render() {
    return (
      <div>
        <ParallaxList />
      </div>
    );
  }
}

export default Home;
