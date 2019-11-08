import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Test, Login } from "./componenets/pages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/login" component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
