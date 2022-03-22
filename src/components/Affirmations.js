import React from "react";
import affData from "../affirmationData";

export default function Affirmation() {

const [affirmation, setAffirmation] = React.useState({affirm: ''})

function getRandAff(){
  const randAff = affData[Math.floor(Math.random()*affData.length)]
  setAffirmation({affirm: randAff})
}

React.useEffect(() => {
  getRandAff()
    const interval = setInterval(() => {
      getRandAff()
    }, 86400000);

    return() => clearInterval(interval)

},[])

  return (
    <div>
      <h3>Your Daily Affirmation:</h3>
      <h4>{affirmation.affirm}</h4>
    </div>
  );

}