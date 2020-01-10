import React from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
