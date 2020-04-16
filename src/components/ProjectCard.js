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
  }

  useEffect(() => {
    if (blured) {
      // Checks if current element has focus (child with focus counts)
      if (!(document.activeElement === thisCard)) {
        setMouseOver(false);
      }
      return () => {
        setBlured(false);
      }
    }

    return () => {if (blured){setBlured(false)} };
    
  }, [blured,thisCard])

  // Remove buttons when overlay is not visible to prevent being able to click them without even seeing them on mobile
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
            tabIndex="0"
            ref={thisCard}
          >
            {/* Begin portfolio Item inner container. This container handles styling for highlighted/grey */}
            <div className={props.highlight ? "project" : "project--grey"}>
              <img
                className={`img-fluid ${
                  props.highlight ? "project__img" : "project__img--grey"
                }`}
                src={`${process.env.PUBLIC_URL}/project_images/${props.imageName}`}
                alt={props.title}
              />
              {/* Being project title container. Only appears if props.displayTitle is true */}
              {props.displayTitle ? (
                <div
                  className={
                    props.highlight ? "project__title" : "project__title--grey"
                  }
                >
                  {/* Inner text container only exists to handle media query for font size */}
                  <div className="project__title-inner">
                    {/* Capitalized Title */}
                    {props.title[0].toUpperCase() + props.title.slice(1)}
                  </div>
                </div>
              ) : (
                null
              )}
              {/* Begin mouse-over detail overlay for project card */}
              {smBreakPoint ? (
                // BEGIN MOBILE ONLY VERSION OF DETAIL OVERALY
                // *********************************************************************
                <div
                  className="project__overlay"
                  style={{ visibility: mouseOver ? "visible" : "hidden" }}
                >
                  <h3 className="mb-sm-4 mb-xs-1" style={{ fontSize: "1em" }}>
                    {props.title[0].toUpperCase() + props.title.slice(1)}
                  </h3>
                  {/* Button container for deploy and repo links (MOBILE)*/}
                  {buttonsActive ? (
                    <div className="row justify-content-around mb-xs-1 mb-sm-3">
                      {props.deployLink ? (
                        <a
                          className="col-5 btn btn-light btn-sm"
                          href={props.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Site
                        </a>
                      ) : (
                        null
                      )}
                      {props.repoLink ? (
                        <a
                          className="col-5 btn btn-light btn-sm"
                          href={props.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      ) : (
                        null
                      )}
                    </div>
                  ) : (
                    null
                  )}
                  {/* End button container (MOBILE) */}
                  <p>{props.summary}</p>
                </div>
              ) : (
                // END MOBILE ONLY VERSION OF OVERLAY
                // ******************************************************************* \\
                // BEGIN NON-MOBILE VERSION OF OVERLAY
                <div
                  className="project__overlay"
                  style={{
                    visibility: mouseOver ? "visible" : "hidden",
                  }}
                >
                  <h3>{props.title[0].toUpperCase() + props.title.slice(1)}</h3>
                  <p>{props.summary}</p>
                  {/* Button container for deploy and repo links */}
                  <div className="project__button-container">
                    {props.deployLink ? (
                      <a
                        className="btn btn-light"
                        href={props.deployLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Website
                      </a>
                    ) : (
                      ""
                    )}
                    {props.repoLink ? (
                      <a
                        className="btn btn-light"
                        href={props.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* End link button container */}
                </div>
                //* End mouseover detail overlay */
              )}
              {/* End mobile vs desktop conditional html */}
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
