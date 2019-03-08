import React, { Component } from 'react';
import StaticListItemComponent from './StaticListItem.component.jsx';
import StaticListFormComponent from './StaticListForm.component.jsx';
import { reactLocalStorage as LocalStorage } from 'reactjs-localstorage';

class StaticListComponent extends Component {

  constructor(props) {
    super(props);
    const stored_items = Array.from(LocalStorage.getObject('ds.static.list.namespace'));
    this.state = {
      errorDisplayClassName: 'd-none',
      items: stored_items
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

    // @Todo: Improve starting from there
    let max_id = Math.max.apply(Math, items.map((item) => item.id))
    if (!max_id) {
      max_id = parseInt(max_id + 1);
    } else {
      max_id = 1;
    }
    const all_items = items.concat([{
      id: max_id,
      name: name.value,
      price: parseFloat(price.value).toFixed(2)
    }]);
    // until here
    this.setState({
      errorDisplayClassName: 'd-none',
      items: all_items
    })
    event.target.reset();
    event.target[0].focus();
    LocalStorage.setObject('ds.static.list.namespace', all_items);
  }

  render() {
    const items = this.state.items.slice();
    return(
      <div className="container">
        <h1>Static list of components</h1>
        <p>This is just a very straightforward manner to build a list using react. Items added here are persisted using local storage.</p>
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
