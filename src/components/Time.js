import React from "react";
import moment from "moment";
moment().format();

export default function Time() {

  const [clock, setClock] = React.useState({
      time: moment().format("hh:mm:ss a"),
      day: moment().format("dddd"),
      date: moment().format("LL"),
  })

  const [greeting, setGreeting] = React.useState('')

    function tick() {
      getGreeting()
      setClock({
      time: moment().format("hh:mm:ss a"),
      day: moment().format("dddd"),
      date: moment().format("LL"),
    });
  }

  function getGreeting() {
    if (moment().format("a") === "am") {
      setGreeting("Morning");
    } else if (
      moment().format("a") === "pm" &&
      moment().format("hh") > 1 &&
      moment().format("hh") <= 3
    ) {
      setGreeting("Afternoon");
    }
    setGreeting("Evening");
  }

  React.useState(() => {
    const interval = setInterval(() => {
      tick()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="title">
      <h1 className="title--greeting">{`Good ${greeting} Babe-o!`}</h1>
      <h3 className="title--day">{`${clock.day}`}</h3>
      <h3 className="title--day"> {`${clock.date}`}</h3>
      <h2 className="title--time">{`${clock.time}`}</h2>
    </div>
  );
}