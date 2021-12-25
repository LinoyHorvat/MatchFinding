import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import AnswerButton from "./components/AnswerButton";
import Animal from "./components/Animal";

class App extends Component {
  state = { 
    negativeCounter: 0,
    positiveCounter: 0,
    descriptionArray: ["Bambi", "Sheep", "Lion", "Monkey", "Shark", "Fish", "Dog", "Cat"],
    chosenAnimal: 0, 
    guessedAnimal: 0, 
    bool: true
  };
  choseRandomAnimals = () => {
    let num1 = Math.floor(Math.random() * (this.state.descriptionArray.length));
    let num2 = Math.floor(Math.random() * (this.state.descriptionArray.length));
    this.setState({chosenAnimal: num1, guessedAnimal: num2 }); 
    num1 === num2 ? this.setState({bool: true}) :this.setState({bool: false});
  }

  addToPositive = () => {
    this.setState((prevState) => {
      return { positiveCounter: prevState.positiveCounter + 1 };
    });
  };
  addToNegative = () => {
    this.setState((prevState) => {
      return { negativeCounter: prevState.negativeCounter + 1 };
    });
  };

  
  render() {
    return (
      <div className = "container" >
      <Counter negativeCounter = {this.state.negativeCounter} 
      positiveCounter = {this.state.positiveCounter}/>
      <br />
      <div className = "animal">
      <Animal animal = {this.state.chosenAnimal}/>
      <br />
      <h2>{this.state.descriptionArray[this.state.guessedAnimal]}</h2>
      </div>
      <br />
      <AnswerButton 
      choseRandomAnimals = {this.choseRandomAnimals} 
      bool = {this.state.bool} 
      addToPositive = {this.addToPositive}
      addToNegative = {this.addToNegative}/>
      </div>
    );
  }
}

export default App;
