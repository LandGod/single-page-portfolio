import React from "react";
import { action } from "@storybook/addon-actions";
import "./mainAppCopy.css";
import ToolTip from "../components/ToolTip";

export default {
  component: ToolTip,
  title: "ToolTip",
  decorator: [
    (story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div>{story}</div>
      </div>
    ),
  ],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const ToolTipData = {
  togglePopup: action("Toggle Popup"),
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

export const Default = () => (
  <div style={{ flexDirection: "row", justifyContent: "space-around" }}>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        activationType="hover"
        content={"Some Information (left)"}
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>
          Some Other Additional Hoverable Text
        </p>
      </ToolTip>
    </span>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        activationType="hover"
        content={"Additional Information (Center)"}
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>Hoverable Text 2</p>
      </ToolTip>
    </span>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        activationType="hover"
        content={
          "Still more information (Left) Lorem Ipsum dolor ahmet, blah blah, blah. And also blah."
        }
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>Still More Hoeverable Text</p>
      </ToolTip>
    </span>
  </div>
);

export const DefaultFlipped = () => (
  <div style={{ flexDirection: "row", justifyContent: "space-around" }}>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        flip={true}
        activationType="hover"
        content={"Some Information (left)"}
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>
          Some Other Additional Hoverable Text
        </p>
      </ToolTip>
    </span>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        flip={true}
        activationType="hover"
        content={"Additional Information (Center)"}
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>Hoverable Text 2</p>
      </ToolTip>
    </span>
    <span
      style={{
        flexDirection: "column",
        display: "inline-block",
        margin: "50px",
      }}
    >
      <ToolTip
        showTooltip={true}
        flip={true}
        activationType="hover"
        content={
          "Still more information (Left) Lorem Ipsum dolor ahmet, blah blah, blah. And also blah."
        }
      >
        <p style={{ textAlign: "center", border:'1px solid red', padding:'2px' }}>Still More Hoeverable Text</p>
      </ToolTip>
    </span>
  </div>
);
