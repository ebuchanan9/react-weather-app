import React from "react";

export default function Units() {
  let data = {
    humidity: "42%",
    windSpeed: "4 mph"
  };
  return (
    <div className="col-6">
      <ul>
        <li>Humidity:{data.humidity}</li>
        <li>Wind:{data.windSpeed}</li>
      </ul>
    </div>
  );
}
