import React, { useState, useEffect, createRef } from "react";
import { MediaContext } from "../contexts/MediaContext";

function ProjectCard(props) {
  // Props:
  // width?: "single" or "double" - Makes the component 4 or 8 columns in medium view - Default = single
  // imageName: file name of image to be displayed
  // title: Name of project/title
  // repoLink?: link to project repo
  // deployLink?: link to deployed project
  // highlight: number - 0: tech missing; 1: no techs selected; 2: has all selected techs
  // summary: Short summary of the project
  // displayTitle?: boolean - set to true if the title needs to be displayed as text (not alreayd in the image) - default true

  // CONTEXT - This component consumes the MediaContext provider in order to be mobile responsive using the smBreakPoint property

  const [mouseOver, setMouseOver] = useState(false); // Tracks mouse over entire component. Used for zoom/scale effect.
  const [buttonsActive, setButtonsActive] = useState(false);
  const [blured, setBlured] = useState(false); // Tracks whether or not any blur event has just occured so that we can trigger our useEffect for blur handling

  const thisCard = createRef();

  const mouseOnComponent = () => {
    // Update state to reflect mouseover (unless the card is greyed out by filter)
    if (props.highlight) {
      setMouseOver(true);
    }
  };

  const mouseOffComponent = () => {
    setMouseOver(false);
  };

  const handleBlur = () => {
    setBlured(true);
  };

  // Translate focus out to do the same thing as mouseout while avoiding loss of focus on child focus
  useEffect(() => {
    if (blured) {
      // Checks if current element has focus (child with focus counts)
      if (!(document.activeElement === thisCard)) {
        setMouseOver(false);
      }
      return () => {
        setBlured(false);
      };
    }

    return () => {
      if (blured) {
        setBlured(false);
      }
    };
  }, [blured, thisCard]);

  // Disable buttons when overlay is not visible to prevent being able to click them without even seeing them on mobile
  useEffect(() => {
    if (mouseOver && !buttonsActive) {
      setButtonsActive(true);
    } else if (!mouseOver && buttonsActive) {
      setButtonsActive(false);
    }
  }, [mouseOver, buttonsActive]);

  return (
    <MediaContext.Consumer>
      {(context) => {
        const { smBreakPoint } = context;
        return (
          // Container with sizing info for overall component. Has a handler for mouseover attached.
          <div
            className={`col-${props.width === "double" ? "12" : "6"} col-md-${
              props.width === "double" ? "6" : "4"
            } p-1 p-md-2 project__container`}
            onMouseEnter={mouseOnComponent}
            onMouseLeave={mouseOffComponent}
            onFocus={mouseOnComponent}
            onBlur={handleBlur}
            tabIndex={smBreakPoint ? "" : "0"}
            ref={thisCard}
            aria-label={`Project: ${props.title}`}
          >
            <div className="project__overlay">
              <h3>{props.title[0].toUpperCase() + props.title.slice(1)}</h3>

              {smBreakPoint ? null : <p>{props.summary}</p>}
              {/* Button container for deploy and repo links */}
              {/* Some notes on the button container the hack that was apparently neccessary to make it work properly on mobile:
                  Pointer events are explicitly disabled and re-enabled on both the parent element of the anchor tags, and the anchor tags themesleved.
                  Why? Two reasons:
                  1. If you only do it on the parent, then they remain disabled when needed, but have to be clicked twice in a row after being enabled to actually work
                  2. If you only do it on the anchor tags then they just never get disabled.

                  It took me a long time and trying a ton of crap, that in theory should have worked, before I landed on this. My current theory is that the asynchronous 
                  manner in which React handles events, and/or the way it causes certain things to bubble that otherwise wouldn't, is somehow causing this behavior. 

                  Either that or it's just a glitch in the chrome mobile mocker. If so... ugh. 
                  
                  For now though, I am satisfied that it works. Mess with the below code at your own peril.

                  Additional fun fact: Added comments to the line that the style properties are on breaks the functionality. Somehow.

                 */}
              <div className="project__button-container">
                {props.deployLink ? (
                  <a
                    className="btn btn-light project__button"
                    href={props.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to website"
                  >
                    {smBreakPoint ? "Site" : "View Website"}
                  </a>
                ) : null}
                {props.repoLink ? (
                  <a
                    className="btn btn-light project__button"
                    href={props.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to source code on github"
                  >
                    {smBreakPoint ? "Code" : "Source Code"}
                  </a>
                ) : null}
              </div>
              {/* Begin portfolio Item inner container. This container handles styling for highlighted/grey */}
              <div
                className={props.highlight ? "project" : "project--grey"}
                aria-hidden="true"
                style={
                  mouseOver
                    ? { visibility: "hidden" }
                    : { visibility: "visible" }
                }
              >
                <img
                  className={`img-fluid ${
                    props.highlight ? "project__img" : "project__img--grey"
                  }`}
                  src={`${process.env.PUBLIC_URL}/project_images/${props.imageName}`}
                  alt={props.title}
                  aria-hidden="true"
                />
                {/* Being project title container. Only appears if props.displayTitle is true */}
                {props.displayTitle ? (
                  <div
                    className={
                      props.highlight
                        ? "project__title"
                        : "project__title--grey"
                    }
                    aria-hidden="true"
                  >
                    {/* Inner text container only exists to handle media query for font size */}
                    <div className="project__title-inner" aria-label="none">
                      {/* Capitalized Title */}
                      {props.title[0].toUpperCase() + props.title.slice(1)}
                    </div>
                  </div>
                ) : null}
                {/* Begin mouse-over detail overlay for project card */}
                {/* End link button container */}
              </div>
              {/* End mouseover detail overlay */}
            </div>
            {/* End portfolio inner container */}
          </div>
        );
      }}
    </MediaContext.Consumer>
  );
}

ProjectCard.defaultProps = {
  width: "single",
  displayTitle: true,
};

export default ProjectCard;
