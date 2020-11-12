import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {};

  render() {
    return this.props.counters.map((counter) => (
      <Counter
        key={counter.id}
        counter={counter}
        onIncreament={this.props.onIncreament}
        onDelete={this.props.onDelete}
        onDecrement={this.props.onDecrement}
      />
    ));
  }
}

export default Counters;
