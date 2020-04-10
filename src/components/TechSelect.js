import React, { useState } from "react";
import ToolTip from "./ToolTip";
import styles from "./styles/TechSelect.module.css";

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
      <ToolTip content={props.caseSensitiveName} showTooltip={showTooltip} flex={true} activationType='hover'>
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
