import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Test, Login, ComminSoon,Kanban } from "./componenets/pages";
import "./common.css";

class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Kanban} />
          <Route path="/login" component={Login} />
          <Route path="/schedule" component={Kanban} />
          <Route path="/report" component={ComminSoon} />
          <Route path="/blocks" component={ComminSoon} />
          <Route path="/kanban" component={ComminSoon} />
          <Route path="/settings" component={ComminSoon} />
          <Route path="/test" component={Test} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
