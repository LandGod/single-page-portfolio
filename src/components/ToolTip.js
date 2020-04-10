import React from "react";

function ToolTip(props) {
  /* 
    PROPS:
        -suppressToolTip: boolean = if true, tooltip is never shown. If false, default behavior.
        -content: any html = content for the tooltip itself. IE: was is displayed in the tooltip.
        -showTooltip: boolean = True shows tooltip, false hides tooltip
        -flex: boolean = True sets container as a flexbox (useful for vertically centering children)
        -flip: boolean = If true, display tooltip above rather than below child component
        -activationType: 'hover' | 'click' = conditions under which tooltip should appear
        -responsive: boolean = false uses default sizing via pixels, true fits tooltip to content
        -offset: number = use with responsive to center element since value will need to depend on tooltip size
    */

  return (
    <div
      className={`tooltip ${
        props.activationType === "hover"
          ? "tooltipHoverable"
          : props.activationType === "click"
          ? "tooltipClickable"
          : ""
      } ${props.flex ? "display-flex" : ""}`}
    >
      {props.children}
      <span
        className={`
        tooltiptext
        ${props.responsive ? 'tooltiptextResponsive' : ''}
        ${props.flip ? "tooltiptextTop" : "tooltiptextBottom"}
        `}
        style={props.offset ? {marginLeft: props.offset} : {}}
      >
        {props.content}
      </span>
    </div>
  );
}

export default ToolTip;
