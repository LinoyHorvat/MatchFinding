import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="topMenu">
      <div className="negative">
      <span role="img" aria-label="negative">🙁</span>
      <h3>{this.props.negativeCounter}</h3>
      </div>
      <div className="positive">
      <span role="img" aria-label="sheep">😀</span>
      <h3>{this.props.positiveCounter}</h3>
      </div>
      </div>
    );
  }
}
