import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import NavComponent from './components/Nav.component.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigationLink: 'about-me'
    }
  }

  handleNavClick(link_name) {
    this.setState({ navigationLink: link_name})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavComponent optionSelected="something-else" onClick={(link_name) => this.handleNavClick(link_name)} activeLink={this.state.navigationLink}/>
          <div className="card">
            <div className="card-body">
              Option selected: <b>{this.state.navigationLink}</b>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
