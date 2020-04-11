import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import MediaContextProvider from "./contexts/MediaContext";

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
