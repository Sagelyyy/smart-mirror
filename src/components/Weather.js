import React from "react";
const apiKey = "f9b983c1b948fbd3a11a09e986af5edf";


export default function Weather(){
    const [weatherData, setWeatherData] = React.useState({
                    cityName: "Hudson, NH",
                    cityIcon: "",
                    cityTemp: "",
                    cityDesc: "",
                    cityFeelsLike: "",
                })

    function fetchWeather(){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=42.7654&lon=-71.4676&appid=${apiKey}&units=imperial`
        fetch(url)
        .then(response => response.json())
        .then(data => setWeatherData({
            cityName: "Hudson, NH",
            cityIcon: data.weather[0].id,
            cityTemp: data.main.temp,
            cityDesc: data.weather[0].description,
            cityFeelsLike: data.main.feels_like
        }))
    }

    React.useEffect(() => {
        fetchWeather()
        const interval = setInterval(() => {
            fetchWeather()
        }, 1800000)

        return() => clearInterval(interval)

    },[])

    return(
            <div className="weather--card">
                <h1 className="weather--city">{weatherData.cityName}</h1>
                <h1 className="weather--temp">{Math.round(weatherData.cityTemp)}°F<span> <i className={`wi wi-owm-${weatherData.cityIcon}`}></i></span></h1>
                <p className="weather--feels">Feels like {Math.round(weatherData.cityFeelsLike)}°F</p>
                <p className="weather--desc">{weatherData.cityDesc}</p>
            </div>
    )

}