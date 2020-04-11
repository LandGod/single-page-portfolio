import React, { Component, useEffect, useState, createContext } from "react";

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

export const MediaContext = createContext();

class MediaContextProvider extends Component {
  cantHover = useMedia("(hover:none)"); // Return true if device is touch-screen only (no mouse pointer)
  smBreakPoint = useMedia("(max-width: 767px)"); // 540px is the sm breakpoint, but 768px is where things go off the rails for this app.

  render() {
    return (
      <MediaContext.Provider
        value={{ cantHover: this.cantHover, smBreakPoint: this.smBreakPoint }}
      >
        {this.props.children}
      </MediaContext.Provider>
    );
  }
}

export default MediaContextProvider;
