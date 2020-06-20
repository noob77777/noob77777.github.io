import React, { Component } from "react";
import Home from "./components/Main/Home/Home";
import Loader from "./components/Loader/Loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    const loading = this.state.loading ? false : true;
    this.setState({ loading });
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <Loader toggleState={this.toggleState} />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}

export default App;
