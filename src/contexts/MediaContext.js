import React, { useEffect, useState, createContext } from "react";

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
      let listener = () => {
        setMatches(media.matches);
      };
      media.onchange = listener;
      // Return teardown function for listener
      return () => (media.onchange = null);
    },

    // Do not run this effect if the following value was not changed on update
    [query, matches]
  );

  return matches;
}

export const MediaContext = createContext();

function MediaContextProvider(props) {
  let cantHover = useMedia("(hover:none)"); // Return true if device is touch-screen only (no mouse pointer)
  let smBreakPoint = useMedia("(max-width: 767px)"); // 540px is the sm breakpoint, but 768px is where things go off the rails for this app.
  let isIE = useMedia(
    "screen and (min-width:0\0) and (min-resolution: +72dpi)"
  ); // Checks if browser is IE 9 or above.

  return (
    <MediaContext.Provider
      value={{ cantHover: cantHover, smBreakPoint: smBreakPoint, isIE: isIE }}
    >
      {props.children}
    </MediaContext.Provider>
  );
}

export default MediaContextProvider;
