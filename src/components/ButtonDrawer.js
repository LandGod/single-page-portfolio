import React, { useEffect, useState, useContext } from "react";
import { MediaContext } from "../contexts/MediaContext";

function ButtonDrawer(props) {
  // Props:
  // >>toggle: function - from parent that toggles drawer. No agruments.
  // >>open: boolean - is drawer currently open.

  const [allowOverflow, setAllowOverflow] = useState(false);
  const mediaState = useContext(MediaContext);

  // In order to achieve a slide-out animated effect, overflow must be hidden while opening and closing (and while closed)
  // however, overflow must be allowed while fully open to allow tooltips to be displayed properly.
  // This effect, together with the allowOverFlow state allow overflow to be shown only when the drawer is fully open.

  useEffect(() => {
    // If component gets set to open after having been closed, allow overflow after animation finished (2 seconds)
    if (props.open) {
      const allowOverflowTrue = () => {
        setAllowOverflow(true);
      };
      const toolTipTimer = setTimeout(allowOverflowTrue, 2000);

      return () => {
        clearTimeout(toolTipTimer);
      };
    }
    //  If component gets closed after being open, imediately set overflow to false.
    else {
      setAllowOverflow(false);
    }
  }, [props.open, allowOverflow]);

  const currentTechString = () => {
    let output = [...props.currentTechs];
    if (output.length > 1) {
      let lastTech = output.pop();
      return [...output, "and", lastTech].join(" ");
    }

    return output[0];
  };

  return (
    <>
      <div className="drawer__outer">
        <button
          className="plus__button"
          onClick={props.toggle}
          aria-label="Filter Projects by Technology"
          aria-expanded={props.open}
        >
          <div className="plus__label">Filter</div>
          <div className="plus__inner">
            <svg className="plus__icon" width="24" height="24" style={ props.open ? {transform:"rotate(45deg)"} : null}>
              <rect width="24" height="24" fill="none" rx="0" ry="0" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17V13H17C17.55 13 18 12.55 18 12C18 11.45 17.55 11 17 11H13V7C13 6.45 12.55 6 12 6C11.45 6 11 6.45 11 7V11H7C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13H11V17Z"
                fill="#ffffff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18Z"
                fill="#000000"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 18C11.45 18 11 17.55 11 17V13H7C6.45 13 6 12.55 6 12C6 11.45 6.45 11 7 11H11V7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V11H17C17.55 11 18 11.45 18 12C18 12.55 17.55 13 17 13H13V17C13 17.55 12.55 18 12 18Z"
                fill="white"
                fillOpacity="0.01"
              />
            </svg>
          </div>
        </button>
        <span className="sr-only" role="alert">
          {props.currentTechs.length < 1
            ? "Showing all projects."
            : `Showing only projects which used: ${currentTechString()}`}
        </span>
      </div>
      <div
        className="drawer__inner container"
        style={{
          height: `${
            props.open ? (mediaState.smBreakPoint ? "2rem" : "10rem") : "0"
          }`,
          overflow: `${allowOverflow && props.open ? "visible" : "hidden"}`,
        }}
      >
        {/* Info about selected tech for screen readers */}
        {props.children}
      </div>
    </>
  );
}

export default ButtonDrawer;
