import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";

function ToolTip(props) {
  /* 
    PROPS:
        -suppressToolTip: boolean = if true, tooltip is never shown. If false, default behavior.
        -content: any html = content for the tooltip itself. IE: was is displayed in the tooltip.
        -showTooltip: boolean = True shows tooltip, false hides tooltip
        -flex: boolean = True sets container as a flexbox (useful for vertically centering children)
        -flip: boolean = If true, display tooltip above rather than below child component
        -activationType: 'hover' | 'click' = conditions under which tooltip should appear
        -width?: number = Supply a number for the desired width (in pixels) that the tooltip should take up
        -responsive?: boolean (default false) = Width will be set to fit content and centering offset willl be calculated dynamically on render
        -subModal: boolean = Set to true to activate component as modal instead of tooltip (ie: substitute modal for tooltip).
    */

  // Only used for modal mode, but can't be called conditionally, so will always be present.
  const [show, setShow] = useState(false);
  const [elementWidth, setElementWidth] = useState(null);
  const thisToolTip = useRef(null);
  const prevElementWidth = useRef();

  const handleEscapePress = (event) => {
    if (event.key === "Escape") {
      event.target.blur();
    }
  };

  useEffect(() => {
    if (props.responsive && !props.subModal) {
      // Debounce
      if (
        (prevElementWidth + 5 < elementWidth &&
          elementWidth < prevElementWidth - 5) ||
        !elementWidth
      ) {
        setElementWidth(thisToolTip.current.offsetWidth);
        prevElementWidth.current = elementWidth;
      }
    }
  }, [elementWidth, props.subModal, props.responsive]);

  // If on mobile, use modal instead of tooltip
  if (props.suppressToolTip) {
    return (
      <div style={props.flex ? { display: "flex" } : {}}>{props.children}</div>
    );
  }

  if (props.subModal) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <div onClick={handleShow}>{props.children}</div>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          dialogClassName="tooltip__modal"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>{props.content}</Modal.Body>
        </Modal>
      </>
    );
  }

  return (
    <div
      className={`tooltip ${
        props.activationType === "hover"
          ? "tooltip--hoverable"
          : props.activationType === "click"
          ? "tooltip--clickable"
          : ""
      } ${props.flex ? "display-flex" : ""}`}
      onKeyDown={handleEscapePress}
    >
      {props.children}
      <span
        ref={thisToolTip}
        className={`
        tooltip__text
        ${props.flip ? "tooltip__text--top" : "tooltip__text--bottom"}
        `}
        style={
          props.width
            ? {
                width: `${props.width}px`,
                marginLeft: `-${props.width / 2}px`,
                paddingBottom: "0.75em",
                paddingTop: "0.75em",
              }
            : props.responsive
            ? { width: "auto", marginLeft: `calc(${elementWidth}px/-2)` }
            : null
        }
      >
        {props.content}
      </span>
    </div>
  );
}

export default ToolTip;
