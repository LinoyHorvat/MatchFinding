import React from 'react';
import Bambi from "./img/Bambi.png";
import Sheep from "./img/Sheep.png";
import Lion from "./img/Lion.png";
import Monkey from "./img/Monkey.png";
import Shark from "./img/Shark.png";
import Fish from "./img/Fish.png";
import Dog from "./img/Dog.png";
import Cat from "./img/Cat.png";

const animalImages = {
  0: Bambi,
  1: Sheep,
  2: Lion,
  3: Monkey,
  4: Shark,
  5: Fish,
  6: Dog,
  7: Cat,
};

function Animal({animal}) {
  return <div>
  <img src={animalImages[animal]} alt="dice" style={{height: "200px", width: "auto", margin: "auto"}}></img>
  </div>

}

export default Animal;
