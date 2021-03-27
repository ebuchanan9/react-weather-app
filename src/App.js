import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import Search from "./Search";
import Overview from "./Overview";
import Units from "./Units";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Overview />
      <Units />
    </div>
  );
}
