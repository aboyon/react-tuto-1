import React, { Component } from 'react';
import StaticListItemComponent from './StaticListItem.component.jsx';

class StaticListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [{
        "id":1,
        "name": "Mac Book pro Laptop",
        "price": 1600.0
      },{
        "id":2,
        "name": "iPhone X",
        "price": 1000.0
      }]
    }
  }

  render() {
    const items = this.state.items.slice();
    return(
      <div>
        <h1>StaticComponent</h1>
        <p>A list of static values. List can create and remove new items.</p>
        <ul class="list-group">
          <StaticListItemComponent {...items[0]} />
          <StaticListItemComponent {...items[1]} />
        </ul>
      </div>
    )
  }
}

export default StaticListComponent;
