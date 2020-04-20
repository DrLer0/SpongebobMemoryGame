import React from "react";
import Nav from "../Nav";
import {Container} from "../Grid";
import Icons from "../Icons";
import $ from "jquery";
  
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
  
  function shuffleIcons(arr){
    // console.log("icon clicked");
    console.log("shuffled");
    return shuffle(arr);
  };
  
  let clickedPics = [];
  let countState = 0;
  

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
    myarr1 = [
        {
          id: 1, 
          image: require("../../assets/images/gary.png")
        }, 
        {
          id: 2, 
          image: require("../../assets/images/HandsomeSquidward.png")
        },
        {
          id: 3, 
          image: require("../../assets/images/mrKrabs.png")
        },
        {
          id: 4, 
          image: require("../../assets/images/Patrick.png")
        },
        {
          id: 5, 
          image: require("../../assets/images/planketon.png")
        },
        {
          id: 6, 
          image: require("../../assets/images/SandyCheeks.jpg")
        },
        {
          id: 7, 
          image: require("../../assets/images/Suds.png")
        },
        {
          id: 8, 
          image: require("../../assets/images/sPonGEbOB.png")
        },
        {
          id: 9, 
          image: require("../../assets/images/spongegar.png")
        },
        {
          id: 10, 
          image: require("../../assets/images/pearl.png")
        },
        {
          id: 11, 
          image: require("../../assets/images/drink.png")
        },
        {
          id: 12, 
          image: require("../../assets/images/krabbypatty.png")
        }
      ];
  // Setting the initial state of the Counter component
  state = {
    imageArray: this.myarr1
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log("handleIncrement");
  };

  // handleDecrement decreases this.state.count by 1
  handleReset = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: 0});
  };
  componentDidMount(){
    var that = this;
      console.log("--------")
      console.log(that);
      console.log("--------")
      
    $(".btn").click(function(){
        let dataId = this.getAttribute("data-id")
        console.log(dataId);
        if(clickedPics.includes(dataId)){
            // console.log("already in array");
            countState = 0;
            $("#count").text(countState);
            clickedPics = [];
            that.setState({imageArray: shuffle(that.state.imageArray)});
        }
        else{
            clickedPics.push(this.getAttribute("data-id"));
            countState++;
            $("#count").text(countState);
            that.setState({imageArray: shuffle(that.state.imageArray)});
        }
        if(countState === 12){
            alert("You won!");
        }
    })
  }

  getSnapshotBeforeUpdate(prevProps) {
    return { notifyRequired: prevProps.text !== this.props.text };
  }
  
  componentDidUpdate(prevProps){
    console.log("didUpdate?")
    if(prevProps.text !== this.props.text){
      this.setState({imageArray: shuffle(this.state.imageArray)});
      console.log("updated?")
    }
}
  

  // The render method returns the JSX that should be rendered
  render() {
    return (
        <div>
        <Nav
          count={countState}
        />
        <Container fluid>
          <h1>Clicky Game!</h1>
          <p> Click on an image to earn points, but don't click on any more than once!</p>
        </Container>
        <Container fluid>
          <Icons arr={this.state.imageArray} 
          handleIncrement={this.handleIncrement} />
        </Container>
        </div>
    );
  }
}

export default Counter;
