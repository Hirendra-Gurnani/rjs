import React, { Component } from "react";

const UpdatedComp = (OriginalComp, incrementNum) => {
  class NewComp extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increment() {
      this.setState((prevState) => ({
        count: prevState.count + incrementNum,
      }));
    }
    decrement() {
      if (this.state.count === 0) {
        this.setState(() => ({
          count: 0,
        }));
      } else {
        this.setState((prevState) => ({
          count: prevState.count - incrementNum,
        }));
      }
    }
    render() {
      return (
        <OriginalComp
          count={this.state.count}
          incrementCount={() => this.increment()}
          decrementCount={() => this.decrement()}
        />
      );
    }
  }
  return NewComp;
};

export default UpdatedComp;
