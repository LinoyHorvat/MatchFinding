import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
  state = { 
    negativeCounter: 0,
    positiveCounter: 0
  };

  
  render() {
    return (
      <div>
      <Counter negativeCounter = {this.state.negativeCounter} 
      positiveCounter = {this.state.positiveCounter}/>

      </div>
    );
  }
}

export default App;
