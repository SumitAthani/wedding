import "./css/HomePage.css";
import "./components/countDown"
import flowerImageLeft from "./assets/leftFlower.png";
import flowerImageRight from "./assets/rightFlower.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div >
          {/* <img src={flowerImageLeft} class="top-left-decoration" /> */}
          <img src={flowerImageRight} class="top-right-decoration"/>
        </div>
        <countDown/>
      </header>
    </div>
  );
}

export default App;
