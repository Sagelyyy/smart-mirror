import React from "react";
import memories from "../imgData"


export default class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            src: memories,
            currentImg: memories[this.getRandomPhoto()].src,
        };
      }

      componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            10000
          );
      }

      componentWillUnmount(){
        clearInterval(this.timerID);
      }

      getRandomPhoto(){
        return Math.floor(Math.random()* memories.length)
    }

      tick() {
        this.setState({
          currentImg: memories[this.getRandomPhoto()].src,
        });
      }

    render(){
        return(
        <img className={`carousel--photo`} alt="babe-o-pic" src={this.state.currentImg}/>
        )
    }
    
}