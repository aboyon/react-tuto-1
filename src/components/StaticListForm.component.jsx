import React, { Component } from 'react';

class StaticListFormComponent extends Component {
  render() {
    return(
      <form onSubmit={this.props.onSubmit}>
        <div className="form-row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Product name"
              name="name"
              />
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              name="price"
              />
          </div>
          <div className="col-1">
            <button type="submit" className="btn btn-success">Add</button>
          </div>
          <div className="col-2">
            <span className={"badge badge-danger " + this.props.errorToggleClass}>Invalid dataset</span>
          </div>
        </div>
      </form>
    )
  }
}

export default StaticListFormComponent;
