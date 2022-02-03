import React from "react";
import moment from "moment";
moment().format();

export default function Date() {
  const firstDate = "2016-01-15";
  const thisYear = `${moment().year()}-01-15`;
  const [years, setYears] = React.useState(moment(firstDate).fromNow(true));
  const [months, setMonths] = React.useState(moment().diff(thisYear, "months"));
  const [seconds, setSeconds] = React.useState(moment().diff(thisYear, "seconds"));
  const [days, setDays] = React.useState(
    Math.floor(moment().diff(thisYear, "days"))
  );

  React.useEffect(() => {
    //timer set to refresh every 12 hours
    const timerId = setInterval(refreshDates, 43200000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  function refreshDates() {
    setYears(moment(firstDate).fromNow(true))
    setMonths(moment().diff(thisYear, "months"))
    setDays(Math.floor(moment().diff(thisYear, "days")))
  }


  return (
    <div className="date--text">
      <h2>
        {`Together with your babe-o for ${years} `}
        {months > 0
          ? months === 1
            ? `${months} month `
            : `${months} months `
          : ` `}
        {days > 0 ? `and ${days} days` : `and ${days} day`}
      </h2>
    </div>
  );
}
