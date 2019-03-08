import React, { Component } from 'react';
import NavItemComponent from './NavItem.component.jsx'

class NavComponent extends Component {

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <NavItemComponent path="home" name="Home"/>
          <NavItemComponent path="static-list" name="Static lists"/>
          <NavItemComponent path="github" name="My Github"/>
        </ul>
      </nav>
    )
  }
}

export default NavComponent;
