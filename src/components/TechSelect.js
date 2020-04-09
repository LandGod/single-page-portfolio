import React, { useState } from "react";
import ToolTip from "./ToolTip";
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
      className={`${styles.techLogoContainers} col-2 col-md-1 btn btn-link
      ${props.highlight === 2 ? styles.selectedHighlight : ""}
      `}
    >
      <ToolTip content="Lorem Ipsum" showTooltip={showTooltip} flex={true}>
        {/* Begin image */}
        <img
          alt={props.caseSensitiveName}
          className={` img-fluid align-self-center ${styles.techLogos} ${
            props.highlight ? "" : styles.imgGrey
          } `}
          src={`${process.env.PUBLIC_URL}/techs/${props.image}`}
        />
        {/* End image */}
      </ToolTip>
    </div>
    // End main container
  );
}

export default TechSelect;
