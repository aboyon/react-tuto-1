import React from 'react';


let NavItemComponent = (props) =>
  <li className={props.toggleClass(props.url)}>
    <a className="nav-link" href="#" onClick={(link_name) => props.onClick(props.url)}>{props.label}</a>
  </li>

export default NavItemComponent;
