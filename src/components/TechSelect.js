import React, { useState, useContext } from "react";
import ToolTip from "./ToolTip";
import { MediaContext } from "../contexts/MediaContext";

function TechSelect(props) {
  /*
  PROPS:
    -name: string = short lowercase name of this technology
    -caseSensitiveName: string = How the name of the technology should appear to the user
    -highlight: 0 | 1 | 2 = For zero, image is made greyscale. 1 is normal appearance. 2 is normal with an underline (bottom border)
    -image: string = file name with extention of image to be used (path to image - filename is already hardcoded)
    -toggleTech: function = Function which shows or hides the tooltip when called.
    -suppressTooltip: boolean = When true, tooltip will never appear
  */

  const [showTooltip, setShowTooltip] = useState(false);
  const { cantHover } = useContext(MediaContext);

  const toolTipShow = () => {
    setShowTooltip(true);
  };
  const toolTipHide = () => {
    setShowTooltip(false);
  };

  return (
    // Note: This has to be a div, not a button, since the default styling from pseudo classes for buttons, such as :active and :hover
    // will interfer
    // Begin main continer (basically a button)
    <div
      onMouseEnter={toolTipShow}
      onMouseLeave={toolTipHide}
      onClick={() => {
        props.toggleTech(props.name);
      }}
      className={`tech w-1/6 md:w-1/12
              ${props.highlight === 2 ? "tech--highlight" : ""}
              inline-block
            `}
      tabIndex={props.open ? "0" : "-1"}
      aria-hidden={!props.open}
      role="switch"
      aria-label={`Technology: ${props.caseSensitiveName}`}
      aria-checked={props.highlight ? true : false}
    >
      <ToolTip
        suppressToolTip={cantHover}
        content={props.caseSensitiveName}
        showTooltip={showTooltip}
        activationType="hover"
      >
        {/* Begin image */}
        <div className="tech__centerer">
          <img
            alt={props.caseSensitiveName}
            className={` img-fluid ${
              props.highlight ? "" : "tech__image--grey"
            } `}
            src={`${process.env.PUBLIC_URL}/techs/${props.image}`}
          />
        </div>
        {/* End image */}
      </ToolTip>
    </div>
    // End main container
  );
}

export default TechSelect;
