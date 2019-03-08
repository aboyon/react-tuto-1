import React, { Component } from 'react';

class StaticListItemComponent extends Component {
  render() {
    return(
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {this.props.name}
        <span className="badge badge-primary badge-pill">$ {this.props.price}</span>
      </li>
    )
  }
}

export default StaticListItemComponent;
