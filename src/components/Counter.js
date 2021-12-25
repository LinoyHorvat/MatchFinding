import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="topMenu">
      <div className="negative">
      <span role="img" aria-label="negative">🙁</span>
      <h3>{this.props.negativeCounter}</h3>
      </div>
      <div className="positive">
      <span role="img" aria-label="positive">😀</span>
      <h3>{this.props.positiveCounter}</h3>
      </div>
      </div>
    );
  }
}
