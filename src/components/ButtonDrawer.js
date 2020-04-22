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
          <div className="plus__inner btn btn-link">
            <i
              className="plus__icon fas fa-plus-circle"
              style={{
                transform: `${
                  props.open ? "rotate(45deg) translateX(1.9%)" : "rotate(0deg)"
                }`,
              }}
            ></i>
            <div className="plus__background"></div>
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
            props.open ? (mediaState.smBreakPoint ? "36vh" : "18vh") : "0"
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
