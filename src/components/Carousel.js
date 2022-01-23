import React from "react";
import memories from "../imgData"


export default class Carousel extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            src: memories,
            currentImg: memories[this.getRandomPhoto()].src,
            fade: false,
        };
      }


      componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            10000
          );
          this.setState({
            fade: true
        })
      }

      componentWillUnmount(){
        this.setState({
            fade: false
        })
        clearInterval(this.timerID);
      }

      getRandomPhoto(){
        return Math.floor(Math.random()* memories.length)
    }


      tick() {
        this.setState({
          currentImg: memories[this.getRandomPhoto()].src
        });
      }

      setClassname(){
        if(this.state.fade){
            this.setState({
                fadeClass: "fader"
            })
        }else
            this.setState({
                fadeClass: ""
            })
      }

    render(){
        return(
        <img className={`carousel--photo ${this.state.fade ? "fader" : "no-fade"}`} alt="babe-o-pic" src={this.state.currentImg}/>
        )
    }
    
}