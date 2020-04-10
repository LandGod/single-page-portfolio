import React from "react";
import styles from "./styles/ToolTip.module.css";

function ToolTip(props) {
  /* 
    PROPS:
        -suppressToolTip: boolean = if true, tooltip is never shown. If false, default behavior.
        -content: any html = content for the tooltip itself. IE: was is displayed in the tooltip.
        -showTooltip: boolean = True shows tooltip, false hides tooltip
        -flex: boolean = True sets container as a flexbox (useful for vertically centering children)
        -flip: boolean = If true, display tooltip above rather than below child component
    */

  return (
    <div className={`tooltip ${props.flex ? 'display-flex' : ''}`}>
      {props.children}
  <span className="tooltiptext">{props.content}</span>
    </div>
  );
}

export default ToolTip;
