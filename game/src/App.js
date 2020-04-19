import React from "react";
import Nav from "./components/Nav";
import {Container} from "./components/Grid";
import Icons from "./components/Icons";

let myarr1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function shuffleIcons(){
  console.log("icon clicked");
  console.log(myarr1);
  return shuffle(myarr1);
};


function App() {
  return (
      <div>
        <Nav />
        <Container fluid>
          <h1>Clicky Game!</h1>
          <p> Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
        <Container fluid>
          <Icons arr={myarr1} />
        </Container>

      </div>
  );
}

export default App;
