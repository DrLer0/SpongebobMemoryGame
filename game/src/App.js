import React from "react";
import Nav from "./components/Nav";
import {Container} from "./components/Grid";
import Icons from "./components/Icons";

const myarr1 = [
  {
    id: 1, 
    image: require("./assets/images/gary.png")
  }, 
  {
    id: 2, 
    image: require("./assets/images/HandsomeSquidward.png")
  },
  {
    id: 3, 
    image: require("./assets/images/mrKrabs.png")
  },
  {
    id: 4, 
    image: require("./assets/images/Patrick.png")
  },
  {
    id: 5, 
    image: require("./assets/images/planketon.png")
  },
  {
    id: 6, 
    image: require("./assets/images/SandyCheeks.jpg")
  },
  {
    id: 7, 
    image: require("./assets/images/Suds.png")
  },
  {
    id: 8, 
    image: require("./assets/images/sPonGEbOB.png")
  },
  {
    id: 9, 
    image: require("./assets/images/spongegar.png")
  },
  {
    id: 10, 
    image: require("./assets/images/pearl.png")
  },
  {
    id: 11, 
    image: require("./assets/images/drink.png")
  },
  {
    id: 12, 
    image: require("./assets/images/krabbypatty.png")
  }
]

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
  // console.log("icon clicked");
  console.log(myarr1);
  return shuffle(myarr1);
};

function doAlert(){
  alert("pressed!");
}


function App() {
  return (
      <div>
        <Nav />
        <Container fluid>
          <h1>Clicky Game!</h1>
          <p> Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
        <Container fluid>
          {/* <Icons arr={shuffleIcons()} /> */}
          <Icons arr={shuffleIcons()} 
          onClick={() => doAlert()} />
        </Container>

      </div>
  );
}

export default App;
