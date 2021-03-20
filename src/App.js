import React from "react";
import About from "./components/About";
import CurrentWork from "./components/CurrentWork";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import MediaContextProvider from "./contexts/MediaContext";

import "./index.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MediaContextProvider>
        <About/>
        <CurrentWork/>
        <Portfolio/>
        <Contact />
      </MediaContextProvider>
    </div>
  );
}

export default App;
