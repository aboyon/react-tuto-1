import React, { Component } from 'react';
import NavItemComponent from './NavItem.component.jsx'

class NavComponent extends Component {
  toggleActiveClass(link_name) {
    return (this.props.activeLink === link_name) ? 'nav-item active' : 'nav-item';
  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <NavItemComponent onClick={(link_name) => this.props.onClick(link_name)} url="about-me" label="About me" toggleClass={(link_name) => this.toggleActiveClass(link_name)}/>
          <NavItemComponent onClick={(link_name) => this.props.onClick(link_name)} url="experience" label="Experience" toggleClass={(link_name) => this.toggleActiveClass(link_name)}/>
          <NavItemComponent onClick={(link_name) => this.props.onClick(link_name)} url="blog" label="Blog" toggleClass={(link_name) => this.toggleActiveClass(link_name)}/>
          <NavItemComponent onClick={(link_name) => this.props.onClick(link_name)} url="github" label="My Github" toggleClass={(link_name) => this.toggleActiveClass(link_name)}/>
        </ul>
      </nav>
    )
  }
}

export default NavComponent;
