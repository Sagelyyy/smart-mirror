import React from "react";

export default function Affirmation() {

const [affirmation, setAffirmation] = React.useState({affirm: ''})

function fetchAffirmData(){
    const url = `https://thingproxy.freeboard.io/fetch/https://www.affirmations.dev/`;
    fetch(url, {mode: 'cors'})
        .then(response => response.json())
        .then(data => setAffirmation({affirm: data.affirmation}))
}

React.useEffect(() => {
    fetchAffirmData()
    const interval = setInterval(() => {
        fetchAffirmData()
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