import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

// General prupose reuseable media queries
function useMedia(query) {
  // Set state hook to track query match status (boolean)
  let [matches, setMatches] = useState(window.matchMedia(query).matches);

  // Create effect hook to set value for state we just set up
  useEffect(
    () => {
      let media = window.matchMedia(query);

      // Update state only when a change is detected
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      // Set up listener for changes in query match status
      let listener = () => setMatches(media.matches);
      media.addListener(listener);

      // Return teardown function for listener
      return () => media.removeListener(listener);
    },

    // Do not run this effect if the following value was not changed on update
    [query, matches]
  );

  return matches;
}

function App() {

  let cantHover = useMedia('(hover:none)')

  return (
    <div className="App">
      <About />
      <Portfolio noHover={cantHover} />
      <Contact />
    </div>
  );
}

export default App;
