import React from "react";

const apiKey = "f9b983c1b948fbd3a11a09e986af5edf";
const error = "something went wrong"


export default class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            cityName: "Hudson, NH",
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
        console.log(cityData)
        // myCity.name = cityData.name
        // myCity.temp = cityData.main.temp;
        // myCity.temp_min = cityData.main.temp_min;
        // myCity.temp_max = cityData.main.temp_max;
        // myCity.pressure = cityData.main.pressure;
        // myCity.humidity = cityData.main.humidity;
        // myCity.feels_like = cityData.main.feels_like;
        // myCity.weather = cityData.weather[0].description;
        // myCity.asOf = convertTimeStamp(cityData.dt);
        // myCity.sunrise = convertTimeStamp(cityData.sys.sunrise);
        // myCity.sunset = convertTimeStamp(cityData.sys.sunset);
        return await cityData
    }

    componentDidMount(){
        this.parseData()
        .then(response => this.setState({
            cityName: "Hudson, NH",
            cityTemp: response.main.temp,
            cityDesc: response.weather[0].description,
            cityFeelsLike: response.main.feels_like

        }))
    }

    render(){
        return(
            <div className="weather--card">
                <p className="weather--city">{this.state.cityName}</p>
                <p className="weather--temp">{Math.floor(this.state.cityTemp)}°F</p>
                <p className="weather--feels">Feels like {Math.floor(this.state.cityFeelsLike)}°F</p>
                <p className="weather--desc">{this.state.cityDesc}</p>
            </div>
        )
    }
}