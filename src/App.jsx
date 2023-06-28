import "./App.css";
import Home from "./components/Home";
import ReactGA from "react-ga";

const TRACKING_ID = "G-B85VQ3GT98";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
