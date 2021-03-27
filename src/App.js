import "./index.css";
import Search from "./Search";
import Overview from "./Overview";
import Units from "./Units";

export default function App() {
  return (
    <div className="App">
      <div className = "Weather">
      <Search />
      <Overview />
      <Units />
    </div>
    <p>
      <a href = "https://github.com/ebuchanan9/react-weather-app">Open-Source Code</a> by <a href = "https://www.linkedin.com/in/erin-buchanan-lmsw-ba2a2b160/">Erin Buchanan</a>
    </p>
    </div>
  );
}
