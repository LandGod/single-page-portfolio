import React, { useState } from "react";
import styles from "./styles/TechSelect.module.css";

function TechSelect(props) {
  const [showTooltip, setShowTooltip] = useState(false);

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
      className={`${styles.techLogoContainers} col-md-1 col-3 btn btn-link 
      ${props.highlight === 2 ? styles.selectedHighlight : ""}
      `}
    >
      {/* Begin image */}
      <img
        alt={props.caseSensitiveName}
        className={`img-fluid ${styles.techLogos} ${
          props.highlight ? "" : styles.imgGrey
        } `}
        src={`${process.env.PUBLIC_URL}/techs/${props.image}`}
      />
      {/* End image */}

      {/* Begin tooltip */}
      {/* Logic to stop render of anything to do with the tooltip on devices that don't have hover capability */}
      {props.suppressTooltip ? (
        ""
      ) : (
        <>
          <div
            className={`${styles.tooltip} ${
              showTooltip ? "" : styles.tooltipHidden
            }`}
          >
            {props.caseSensitiveName}
          </div>
          <div
            className={`${styles.tooltipAfter} ${
              showTooltip ? "" : styles.tooltipHidden
            }`}
          ></div>
        </>
      )}
      {/* End tooltip */}
    </div>
    // End main container
  );
}

export default TechSelect;
