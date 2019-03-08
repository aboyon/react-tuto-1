import React, { Component } from 'react';
import StaticListItemComponent from './StaticListItem.component.jsx';
import StaticListFormComponent from './StaticListForm.component.jsx';

class StaticListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorDisplayClassName: 'd-none',
      items: [{
        "id":1,
        "name": "Mac Book pro Laptop",
        "price": 1600.0
      },{
        "id":2,
        "name": "iPhone X",
        "price": 1000.0
      },{
        "id":3,
        "name": "Air Pods",
        "price": 120.0
      }]
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name, price} = event.target.elements
    if (name.value.length <= 0 || price.value.length <= 0) {
      this.setState({errorDisplayClassName: ''})
      return false;
    }
    const items = this.state.items
    const max_id = Math.max.apply(Math, items.map((item) => item.id))
    this.setState({
      errorDisplayClassName: 'd-none',
      items: items.concat([
        {
          id: parseInt(max_id + 1),
          name: name.value,
          price: parseFloat(price.value).toFixed(2)
        }
      ])
    })
    event.target.reset();
    event.target[0].focus();
  }

  render() {
    const items = this.state.items.slice();
    return(
      <div className="container">
        <h1>Static list of components</h1>
        <p>This is just a very straightforward manner to build a list using react. Items added here aren't persisted in any manner. Once the page its reloaded values new values are missing.</p>
        <StaticListFormComponent onSubmit={(event) => this.handleSubmit(event)} errorToggleClass={this.state.errorDisplayClassName} />
        <div className="row">
          <div className="col-8">
            <hr />
            <ul className="list-group">
              {this.state.items.map((item) =>
                <StaticListItemComponent {...item} key={'key-' + item.id}  />
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default StaticListComponent;
