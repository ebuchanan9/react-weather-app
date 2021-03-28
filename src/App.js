import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className = "container">
        <Weather defaultCity ="Miami"/>
          <footer>
        <p>
          <a href="https://github.com/ebuchanan9/react-weather-app">Open-Source Code</a> by <a
            href="https://www.linkedin.com/in/erin-buchanan-lmsw-ba2a2b160/">Erin Buchanan</a>
        </p>
      </footer>
    </div>
    </div>
  );
}
