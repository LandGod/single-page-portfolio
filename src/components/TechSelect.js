import React, { useState } from "react";
// import techs from "../assets/techs.json";
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
    <button
      onMouseEnter={toolTipShow}
      onMouseLeave={toolTipHide}
      onClick={() => {
        props.toggleTech(props.name);
      }}
      className={`${styles.techLogoContainers} col-md-1 col-3 btn btn-link`}
    >
      <img
        alt={props.caseSensitiveName}
        className={`img-fluid ${styles.techLogos} ${
          props.highlight ? "" : styles.imgGrey
        }`}
        src={`${process.env.PUBLIC_URL}/techs/${props.image}`}
        style={
          props.forceBackground
            ? { backgroundColor: props.forceBackground }
            : {}
        }
      />
      {/* Don't render anything to do with the tooltip on devices that don't have hover capability */}
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
    </button>
  );
}

export default TechSelect;
