import React from "react";
import memories from "../imgData";

export default function Carousel() {
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  const photoMax = images.length - 1;
  let currPhoto = 0;
  let listOfImages = [];

  function importAll(r) {
    return r.keys().map(r);
  }

  const [carouselImg, setCarouselimg] = React.useState(images[0]);

  function getNextPhoto() {
    if (currPhoto === photoMax) {
      currPhoto = 0;
      return images[0];
    }
    currPhoto = currPhoto + 1;
    return images[currPhoto];
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
