import React, { useState, useEffect, createRef } from "react";
import { MediaContext } from "../contexts/MediaContext";

function ProjectCard(props) {
  // PROPS:
  //   width?: "single" or "double" - Makes the component 4 or 8 columns in medium view - Default = single
  //   imageName: file name of image to be displayed
  //   title: Name of project/title
  //   repoLink?: link to project repo
  //   deployLink?: link to deployed project
  //   highlight: number - 0: tech missing; 1: no techs selected; 2: has all selected techs
  //   summary: Short summary of the project
  //   displayTitle?: boolean - set to true if the title needs to be displayed as text on top of the image overlay (not already in the image) - default true

  // CONTEXT - This component consumes the MediaContext provider in order to be mobile responsive using the smBreakPoint property

  // STATE & EFFECT:
  //   State and effct here are used exclusively for the purpose of showing/hiding the title image overlay. The overlay should be hidden whenever the card is hovered over or in any way
  //   gains focus. This reveals a description of the project and links to the deployed website and/or repo.
  // The focus tracking modle here has two parts:
  //   1. One is a state variable that tracks whether or not the element should behave as if it has focus. This is the detailVisible variable.
  //   2. Our modle is two seperate state variables to track whether or not a focus-giving or focus losing event has occured. These are the mouseOver & blured state variables.
  // Using this modle helps us avoid 2 key pitfalls:
  //   1. On devices that can't hover, clicking on the element gives it a hover state so quickly that the mouse can actually click "through" the overlay to the underlying button
  //     without the use having seen it first. This is undesireable and super confusing to users. They should only be able to click buttons they can see. By seperating getting focus
  //     and hiding the overlay into seperate concerns, we can hide the overlay with a useEffect function, allowing the underlying buttons to be clicked only after they are revealed.
  //   2. On IE/Edge, the css pseudoselector focus-within is not available. This means that tabselecting to an inner button of a project card, can cause the entire card to lose focus
  //     before React realizes that a child is focused. This then causes the child buttons to lose focus anway, since they get hidden. Obviously this not what we want.

  // State variables
  const [mouseOver, setMouseOver] = useState(false); // Tracks wether or not the component has just recieved focus and/or mouse enter event
  const [detailVisible, setDetailVisible] = useState(false); // Tracks whether or not the project info and buttons should be visible (ie: overlay title/image is invisible)
  const [blured, setBlured] = useState(false); // Tracks whether or not any blur event has just occured on the card so that we can trigger our useEffect for blur handling

  // Reference to highest level element in component, used for tracking if any part of the component has focus using DOM method
  const thisCard = createRef();

  // Called by onMouseEnter & onFocus. Does nothing if card is "greyed out" by technology filters.
  const mouseOnComponent = () => {
    if (props.highlight) {
      setMouseOver(true);
    }
  };

  // Called by onMouseLeave & onBlur
  const handleBlur = () => {
    setBlured(true);
  };

  // Explained above. Mediates visibiliy of overlay, since using raw focus/blur leads to issues.
  useEffect(() => {
    // Check for recent blur event
    if (blured) {
      // Blur events require a double check using this DOM method, since they are triggered even when focus is lost to an own child
      if (!(document.activeElement === thisCard)) {
        setDetailVisible(false);
      }
      return () => {
        setBlured(false);
      };
    }
    // If there was not a recent blur event, check for a recent mouseEnter/Hover event
    else if (mouseOver) {
      // This doesn't need to be double-checked with the DOM and doing so seems to introduce errors, so we don't.
      setDetailVisible(true);
      return () => {
        setMouseOver(false);
      };
    }

    // Because Blured & MouseOver are only meant to be true if a related event was just triggered, they are always reset to false after being read.
    return () => {
      if (blured) {
        setBlured(false);
        setMouseOver(false);
      }
    };
  }, [blured, thisCard, mouseOver]);

  return (
    <MediaContext.Consumer>
      {(context) => {
        // The smBreakPoint context varaible returns true is below and false if above the standard bootstrap sm breakpoint.
        const { smBreakPoint } = context;
        return (
          // Container with sizing info for overall component. Has handlers for onFocus and Blur attached.
          // Can't do mouseover handling with css without using focus-within, but that isn't supported by IE/Edge
          <div
            className={`col-${props.width === "double" ? "12" : "6"} col-md-${
              props.width === "double" ? "6" : "4"
            } p-1 p-md-2 project__container`}
            onMouseEnter={mouseOnComponent}
            onMouseLeave={handleBlur}
            onFocus={mouseOnComponent}
            onBlur={handleBlur}
            tabIndex={props.highlight ? "0" : "-1"}
            ref={thisCard}
            aria-label={`Project: ${props.title}`}
          >
            {/* Project description. Covered by project overlay image when not focused or hovered. Contains A title, description, and links.  */}
            <div
              className={`project__details ${
                props.highlight ? "" : "project__details--grey"
              }`}
            >
              {/* Project title is not shown (in the details) on mobile since it's sort of redundant to the overlay anyway and takes up a ton of space. */}
              {smBreakPoint ? null : (
                <h3>{props.title[0].toUpperCase() + props.title.slice(1)}</h3>
              )}
              <p>{props.summary}</p>
              <div className="project__button-container">
                {/* Project buttons should (when the project is selectable) always have a tabIndex of 0, even when not visible, so that we can easily tab into them. 
                    However, they should lose tab-index when greyed out by the technology filter.*/}
                {props.deployLink ? (
                  <a
                    tabIndex={props.highlight ? "0" : "-1"}
                    className="btn btn-light project__button"
                    href={props.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live website"
                  >
                    {smBreakPoint ? "Site" : "View Website"}
                  </a>
                ) : null}
                {props.repoLink ? (
                  <a
                    tabIndex={props.highlight ? "0" : "-1"}
                    className="btn btn-light project__button"
                    href={props.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source code on GitHub"
                  >
                    {smBreakPoint ? "Code" : "Source Code"}
                  </a>
                ) : null}
              </div>
              {/* Begin portfolio Item overlay. This displays the title and image only when the project has not been focused or hovered. */}
              {/* This should not be selectable and is aria-hidden, since it's just design sugar for looking cool. */}
              <div
                className={`project__overlay ${
                  detailVisible ? "project__overlay--hidden" : ""
                }`}
                aria-hidden="true"
              >
                <img
                  className={`img-fluid project__img ${
                    props.highlight ? "" : "project__img--grey"
                  }`}
                  src={`${process.env.PUBLIC_URL}/project_images/${props.imageName}`}
                  alt={props.title}
                  aria-hidden="true"
                />
                {/* This is the container for displaying the project title on top of the image in the overlay. */}
                {/* Can be hidden with props.displayTitle = false. Should be hidden if the image already has the title on it. */}
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
                {/* End project overlay containing div */}
              </div>
              {/* Project details containing div */}
            </div>
            {/* End Project card overall container */}
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
