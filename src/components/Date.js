import React from "react";
import moment from "moment";
moment().format();

export default function Date() {


    const firstDate = "2016-01-15";
    const [years, setYears] = React.useState(moment(firstDate).fromNow(true))
    const [months, setMonths] = React.useState(
      Math.floor( moment.duration(moment().diff(moment(firstDate))).as("month") % 12
    ))
    const [days, setDays] = React.useState(0)
 
    console.log(Math.floor(moment().diff(firstDate, 'days') / 24))

  return (
    <h2 className="date--text">Together with your babe-o for {`${years}`} {months > 0 ? `and ${months} ${months === 1 ? "month" : "months"} and counting` : ""}</h2>
  )
}
