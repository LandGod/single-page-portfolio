import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import MediaContextProvider from "./contexts/MediaContext";

// Import css. Important that mainApp is imported AFTER boostrap so that it can override certain boostrap styles.
// Note that boostrap.css is a cherry-picked version of the normal boostrap css file leaving out most of the bit that I'm not using.
import "./bootstrap.css";
import "./mainApp.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MediaContextProvider>
        <About/>
        <Portfolio/>
        <Contact />
      </MediaContextProvider>
    </div>
  );
}

export default App;
