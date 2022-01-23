import React from "react";
import moment from "moment";
moment().format();




export default class Time extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            time: moment().format("hh:mm:ss a"),
            day: moment().format("dddd"),
            date: moment().format("LL")
        
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )

    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            time: moment().format("hh:mm:ss a")
        })
    }

    greeting(){
        if (moment().format("a")=== 'am'){
            return 'Morning'
        }
        return 'Evening'
    }

    render(){
        return(
            <div className="title">
                <h1 className="title--greeting">{`Good ${this.greeting()} Babe-o!`}</h1>
                <h2 className="title--day">{`Today is ${this.state.day}, ${this.state.date}`}</h2>
                <h2 className="title--time">{`${this.state.time}`}</h2>
            </div>
        )
    }
}
