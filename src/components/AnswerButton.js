import React, { Component } from "react";

export default class AnswerButton extends Component {
  handleClick = (bool1) => {
    this.props.choseRandomAnimals();
    if (this.props.bool === bool1) this.props.addToPositive()
    else this.props.addToNegative();

  }
  render() {
    return (
      <div className="topMenu">
      <div className="right">
      <button onClick={() => this.handleClick(true)}>
      <span role="img" aria-label="right">✅</span>
      </button>
      </div>
      <div className="wrong">
      <button onClick={() => this.handleClick(false)}>
      <span role="img" aria-label="wrong">❌</span>
      </button>
      </div>
      </div>
    );
  }
}
