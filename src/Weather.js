import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState ({ready:false});
    function handleResponse(response){
        setWeatherData({
            ready:true,
            temperature: (Math.round(response.data.main.temp)),
            city:(response.data.name),
            wind:(response.data.wind.speed),
            humidity:(response.data.main.humidity),
            description:(response.data.weather[0].description),
            icon:(response.data.weather[0].icon),
            date: newDate(response.data.dt*1000)
        });
    }
    if(weatherData.ready){return(
        <div className ="Weather">
            <form>
                <div className ="row">
                    <div className ="col-9">
                        <input type="search" placeholder="Enter a city" className = "form-control" autoFocus="on"/>
                    </div>
                    <div className ="col-3">
                        <input type ="submit" value ="Search" className ="btn btn-primary w-100"/>
                    </div>
                </div>
            </form>
            <h1>Miami</h1>
            <ul>
                <li> {weatherData.date}</li>
                <li className="text-capitalize"> {weatherData.description}</li>
            </ul>
<div className="currentInfo">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-start"
                id="icon"
              ></img>
              <span className="float-start">
                <strong id="temperature">
                    {weatherData.temperature}
                </strong>
                <a href="/" className="active">
                  °F
                </a>{" "}
                |<a href="/">°C</a>
            </span>
            </div>
            </div>
        <div className ="col-6">
            <ul>
                <li>
                    Humidity:{weatherData.humidity}%
                 </li>
                <li>
                     Wind speed: {Math.round(weatherData.wind)}mph
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
    );
}else{
    const apiKey = "00ccd60e50147aa10fe0e380d859f398";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return ("Loading..");
} }

    