import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-1 ">
          <h4>
            <span className="m-2 badge badge-primary">
              {this.props.counter.value}
            </span>
          </h4>
        </div>
        <div className="col">
          <button
            className="btn btn-dark button-small"
            onClick={() => this.props.onIncreament(this.props.counter)}
          >
            +
          </button>
          <button
            className="btn btn-dark button-small m-2"
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            className="btn btn-danger button-small"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
