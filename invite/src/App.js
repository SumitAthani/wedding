import "./css/HomePage.css";

import flowerImageLeft from "./assets/leftFlower.png";
import flowerImageRight from "./assets/rightFlower.png";
import CountDown from "./components/CountDown";
import PetalFalling from "./components/PetalFalling";
import Music from "./components/Music";
import HomePage from "./components/HomePage";

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
        <HomePage/>
      {/* <PetalFalling />
        <CountDown />
        <Music /> */}
      </div>
    </div>
  );
}

export default App;
