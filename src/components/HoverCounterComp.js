import React, { Component } from "react";
import UpdatedComp from "./withCounter";

class HoverCounterComp extends Component {
  render() {
    const {count, incrementCount, decrementCount} = this.props
    return (
      <div
        className="d-flex align-items-center justify-content-center mx-auto w-50"
        style={{ fontSize: "20px" }}
      >
        <button
          className="btn btn-dark position-static"
          style={{ fontSize: "20px" }}
          onMouseOver={decrementCount}
        >
          -
        </button>
        <span className="ms-4 me-4">{count}</span>
        <button
          className="btn btn-dark position-static"
          style={{ fontSize: "20px" }}
          onMouseOver={incrementCount}
        >
          +
        </button>
      </div>
    );
  }
}


export default UpdatedComp(HoverCounterComp, 10);
