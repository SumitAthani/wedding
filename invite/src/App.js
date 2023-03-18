import "./css/HomePage.css";

import flowerImageLeft from "./assets/leftFlower.png";
import flowerImageRight from "./assets/rightFlower.png";
import CountDown from "./components/CountDown";
import PetalFalling from "./components/PetalFalling";
import Music from "./components/Music";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={flowerImageLeft} className="top-left-decoration" />
          <img src={flowerImageRight} className="top-right-decoration" />
        </div>
      </header>
      <div>
        <CountDown />
        <PetalFalling />
        <Music />
      </div>
    </div>
  );
}

export default App;
