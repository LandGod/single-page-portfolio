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

  return (
    <MediaContext.Consumer>
      {(context) => {
        const { smBreakPoint } = context;
        return (
          // Container with sizing info for overall component. Has handlers for onFocus and Blur attached.
          // Can't do mouseover handling with css without using focus-within, but that isn't supported by IE/Edge
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
          {/* Project description. Only visible on hover/focus. Contains A title, description, and links.  */}
            <div className="project__details">
              <h3>{props.title[0].toUpperCase() + props.title.slice(1)}</h3>

              {smBreakPoint ? null : <p>{props.summary}</p>}
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
                className={props.highlight ? mouseOver ? "project__overlay--hidden" : "project__overlay" : "project__overlay--grey"}
                aria-hidden="true"
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
