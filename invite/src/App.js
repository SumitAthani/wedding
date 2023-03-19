import "./css/App.css";

import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Music from "./components/Music";
import Map from "./components/Map";
import PhotoGallery from "./components/PhotoGallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Music/> */}
      <div className="landingWrapper">
        <LandingPage />
      </div>
      <div className="homePageWrapper">
        <HomePage />
        <Music />
      </div>
      <div>
        <Map />
      </div>
      <div>
        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
