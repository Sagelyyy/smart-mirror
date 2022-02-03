import React from "react";

const apiKey = "f9b983c1b948fbd3a11a09e986af5edf";
const error = "something went wrong"


export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cityName: "Hudson, NH",
            cityIcon: "",
            cityTemp: "",
            cityDesc: "",
            cityFeelsLike: "",
        }
    }

    async fetchWeatherData(){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.7654&lon=-71.4676&appid=${apiKey}&units=imperial`;
        try{
         const response = fetch(url, {mode: "cors"})
         return await (await response).json()
        }catch{
            console.log(error)
        }
    }

    async parseData(){
        let cityData = await this.fetchWeatherData()
        .then(response => this.setState({
            cityName: "Hudson, NH",
            cityIcon: response.weather[0].id,
            cityTemp: response.main.temp,
            cityDesc: response.weather[0].description,
            cityFeelsLike: response.main.feels_like
        }))
        return await cityData
    }

    componentDidMount(){
        this.parseData()
        this.timerID = setInterval(() => this.parseData(), 1800000)
    } 

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div className="weather--card">
                <h1 className="weather--city">{this.state.cityName}</h1>
                <h1 className="weather--temp">{Math.round(this.state.cityTemp)}°F<span> <i className={`wi wi-owm-${this.state.cityIcon}`}></i></span></h1>
                <p className="weather--feels">Feels like {Math.round(this.state.cityFeelsLike)}°F</p>
                <p className="weather--desc">{this.state.cityDesc}</p>
                
            </div>
        )
    }
}