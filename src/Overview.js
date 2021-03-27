import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Buffalo",
    date: "Friday 12:30pm",
    description: "Cloudy",
    currentTemperature: "67°F"
  };
  return (
    <div className="overview">
      <h1 className="city">{weatherData.city}</h1>
      <ul>
        <li>Last updated:{weatherData.date}</li>
        <li id="description"> {weatherData.description}</li>
      </ul>
      <div className="currentInfo">
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Sunny"
                className="float-start"
                id="icon"
              ></img>
              <div className="float-start">
                <strong id="temperature">
                  {weatherData.currentTemperature}
                </strong>
                <a href="/" className="active">
                  °F
                </a>{" "}
                |<a href="/">°C</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
