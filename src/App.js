import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import NavComponent from './components/Nav.component.jsx';
import HomeComponent from './components/Home.component.jsx';
import StaticListComponent from './components/StaticList.component.jsx';
import GitHubComponent from './components/GitHub.component.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <Route exact path="/" component={HomeComponent} />
          <Route path="/home" component={HomeComponent} />
          <Route path="/static-list" component={StaticListComponent} />
          <Route path="/github" component={GitHubComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
