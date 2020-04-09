import React, { useState } from "react";
import styles from "./styles/ToolTip.module.css";

function ToolTip(props) {
  /* 
    PROPS:
        -suppressToolTip: boolean = if true, tooltip is never shown. If false, default behavior.
        -content: any html = content for the tooltip itself. IE: was is displayed in the tooltip.
        -showTooltip: boolean = True shows tooltip, false hides tooltip
    */

  return (
    // Begin main continer (basically a button)
    <div className={`${styles.containerDiv} col-2 col-md-1 btn btn-link`}>
      {/* Child element goes here */}
      {props.children}

      {/* Begin tooltip */}
      {/* Logic to stop render of anything to do with the tooltip on devices that don't have hover capability */}
      {props.suppressTooltip ? (
        ""
      ) : (
        <>
          <div
            className={`${styles.tooltip} ${
              props.showTooltip ? "" : styles.tooltipHidden
            }`}
          >
            {/* Tootltip text (or arbitrary html) goes here */}
            {props.content}
            {/* End tootlip text/innerhtml */}
          </div>
          <div
            className={`${styles.tooltipAfter} ${
              props.showTooltip ? "" : styles.tooltipHidden
            }`}
          ></div>
        </>
      )}
      {/* End tooltip */}
    </div>
    // End main container
  );
}

export default ToolTip;
