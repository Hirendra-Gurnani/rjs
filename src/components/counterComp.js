import React, { Component } from "react";

class CounterComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    // this.increment = this.increment.bind(this)
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>
          Increase {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterComp;
