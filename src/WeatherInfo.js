import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props){
return(  
<div className= "weatherInfo">
<h1>{props.data.city}</h1>
            <ul>
                <li> <FormattedDate date={props.data.date}/></li>
                <li className="text-capitalize"> {props.data.description}</li>
            </ul>
  <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-start">
              <WeatherIcon code={props.data.icon} />
            </span>
              <span className="float-start">
                <strong id="temperature">
                    {props.data.temperature}
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
                    Humidity:{props.data.humidity}%
                 </li>
                <li>
                     Wind speed: {Math.round(props.data.wind)}mph
                </li>
            </ul>
        </div>
        </div>
        </div>
        );
}