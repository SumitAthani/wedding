import "./css/HomePage.css";

import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Music from "./components/Music"


function App() {
  const styles = {
    LandingWrapper: {
      display: "flex",
      justifyContent: "top",
      alignItems: "top",
      overflow: "hidden",
    },

    homePageWrapper: {
      display: "flex",
      position: "relative",
      backgroundColor: "green",
      // height: "62vh",
    }
  }
  return (
    <div className="App">
      {/* <Music/> */}
      <div style={styles.LandingWrapper}>
        <LandingPage />
      </div>
      <div style={styles.homePageWrapper}>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
