import "./css/App.css"

import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Music from "./components/Music"


function App() {
  return (
    <div className="App">
      {/* <Music/> */}
      <div className="landingWrapper">
        <LandingPage />
      </div>
      <div className='homePageWrapper'>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
