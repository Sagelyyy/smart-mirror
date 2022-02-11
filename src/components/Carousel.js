import { render } from "@testing-library/react";
import React from "react";
import memories from "../imgData";

export default function Carousel() {
  const photoMax = memories.length - 1;
  let currPhoto = 0;

  const [carouselImg, setCarouselimg] = React.useState(memories[0].src);

  function getNextPhoto() {
    if (currPhoto === photoMax) {
      currPhoto = 0;
      return memories[0].src;
    }
    currPhoto = currPhoto + 1;
    return memories[currPhoto].src;
  }

  function refreshPhoto() {
    setCarouselimg(getNextPhoto());
  }

  React.useEffect(() => {
    //timer set to refresh every 10 sec
    const timerId = setInterval(refreshPhoto, 10000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <img className={`carousel--photo`} alt="babe-o-pic" src={carouselImg} />
  );
}
