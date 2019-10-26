import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home } from './componenets/pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/test" component={Home}/>
            </div>
        );
    }
}

export default App;