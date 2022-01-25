import React from "react";
import moment from "moment";
moment().format();

export default class Timer extends React.Component {


  getDate() {
    const firstDate = "2016-01-15";
    const years = moment(firstDate).fromNow(true);
    const months = Math.floor(
      moment.duration(moment().diff(moment(firstDate))).as("month") % 12
    );

    switch (months) {
      default:
        return <h2 className="date--text">{`Dating your babe-o for ${years} and counting...`}</h2>;
      case 1:
        return (
          <h2 className="date--text">{`Dating your babe-o for ${years} and ${months} month and counting...`}</h2>
        );
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        return (
          <h2 className="date--text">{`Dating your babe-o for ${years} and ${months} months and counting...`}</h2>
        );
    }
  }

  componentDidMount(){
    this.getDate()
    this.timerID = setInterval( () => 
    this.getDate(), 86400000)
}

componentWillUnmount(){
    clearInterval(this.timerID)
}

  render() {
    return this.getDate();
  }
}
