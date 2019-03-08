import React from 'react';
import { Link } from 'react-router-dom'

let NavItemComponent = (p) =>
  <li className="nav-item">
    <Link className="nav-link" to={p.path}>{p.name}</Link>
  </li>

export default NavItemComponent;
