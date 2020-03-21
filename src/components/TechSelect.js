import React, { useState } from "react";
// import techs from "../assets/techs.json";
import styles from "./styles/TechSelect.module.css";

function TechSelect(props) {
  const [showTooltip, setShowTooltip] = useState(0);

  const toolTipShow = () => {
    setShowTooltip(true);
    console.log("DEBUG: showing tooltip");
  };
  const toolTipHide = () => {
    setShowTooltip(false);
    console.log("DEBUG: hiding tooltip");
  };

  return (
    <>
      <button
        onMouseEnter={toolTipShow}
        onMouseLeave={toolTipHide}
        onClick={() => {
          props.toggleTech(props.name);
        }}
        className={`col-1 ${styles.techLogoContainers}`}
      >
        <img
          alt={props.caseSensitiveName}
          className={`img-fluid ${styles.techLogos}`}
          src={`${process.env.PUBLIC_URL}/techs/${props.image}`}
        />
        <div className={`${styles.tooltip} ${showTooltip ? '' : styles.tooltipHidden}`}>{props.caseSensitiveName}</div>
        <div className={`${styles.tooltipAfter} ${showTooltip ? '' : styles.tooltipHidden}`}></div>
      </button>
    </>
  );
}

export default TechSelect;
