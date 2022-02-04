import { render } from "@testing-library/react";
import React from "react";
import memories from "../imgData"




export default function Carousel(){

  const [carouselImg, setCarouselimg] = React.useState('')

  function getRandomPhoto(){
    const photoMax = memories.length
    // return Math.floor(Math.random()*memories.length)
  }

  function refreshPhoto() {
    setCarouselimg(memories[getRandomPhoto()].src,);
  }

      React.useEffect(() => {
        //timer set to refresh every 10 sec
        const timerId = setInterval(refreshPhoto, 10000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);

  return(
    <img className={`carousel--photo`} alt="babe-o-pic" src={carouselImg}/>
  )
}

// export default class Carousel extends React.Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             src: memories,
//             currentImg: memories[this.getRandomPhoto()].src,
//         };
//       }

//       componentDidMount(){
//         this.timerID = setInterval(
//             () => this.tick(),
//             10000
//           );
//       }

//       componentWillUnmount(){
//         clearInterval(this.timerID);
//       }

//       getRandomPhoto(){
//         return Math.floor(Math.random()* memories.length)
//     }

//       tick() {
//         this.setState({
//           currentImg: memories[this.getRandomPhoto()].src,
//         });
//       }

//     render(){
//         return(
//         <img className={`carousel--photo`} alt="babe-o-pic" src={this.state.currentImg}/>
//         )
//     }
    
// }
