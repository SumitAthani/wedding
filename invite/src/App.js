import "./css/HomePage.css";

import flowerImageLeft from "./assets/leftFlower.png";
import flowerImageRight from "./assets/rightFlower.png";
import CountDown from "./components/CountDown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={flowerImageLeft} class="top-left-decoration" />
          <img src={flowerImageRight} class="top-right-decoration" />
        </div>
      </header>
      <div>
        <CountDown />
      </div>
    </div>
  );
}

export default App;
