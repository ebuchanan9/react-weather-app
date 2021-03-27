import React from "react";
import "./Weather.css";

export default function Weather(){
    return(
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
                <li> Friday 12:30pm</li>
                <li> Cloudy</li>
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
                    70
                </strong>
                <a href="/" className="active">
                  °F
                </a>{" "}
                |<a href="/">°C</a>
            </div>
            </div>
            </div>

        <div className ="col-6">
            <ul>
                <li>
                    Humidity:12%
                 </li>
                 <li>
                    Precipitation: 15%
                </li>
                <li>
                     Wind speed: 4mph
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
    )
}