import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Home, Test, Login } from "./componenets/pages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default App;
