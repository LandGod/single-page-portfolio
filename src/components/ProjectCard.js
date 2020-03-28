import React from "react";
import styles from "./styles/ProjectCard.module.css";

class ProjectCard extends React.Component {
  // Props:
  // width?: "single" or "double" - Makes the component 4 or 8 columns in medium view - Default = single
  // imageName: file name of image to be displayed
  // title: Name of project/title
  // repoLink?: link to project repo
  // deployLink?: link to deployed project
  // highlight: number - 0: tech missing; 1: no techs selected; 2: has all selected techs
  // summary: Short summary of the project
  // displayTitle?: boolean - set to true if the title needs to be displayed as text (not alreayd in the image)
  // mobileSize: boolean - true mean the media query for mobile size should be activated

  static defaultProps = {
    width: "single"
  };

  state = {
    mouseOver: false // Tracks mouse over entire component. Used for zoom/scale effect.
  };

  mouseOnComponent = () => {
    if (this.props.highlight) {
      this.setState({ mouseOver: true });
    }
  };

  mouseOffComponent = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    return (
      // Container with sizing info for overall component. Has a handler for mouseover attached.
      <div
        className={`col-${this.props.width === "double" ? "12" : "6"} col-md-${
          this.props.width === "double" ? "6" : "4"
        } p-1 p-md-2 ${
          this.state.mouseOver
            ? styles.card_container_hover
            : styles.card_container
        }`}
        onMouseEnter={this.mouseOnComponent}
        onMouseLeave={this.mouseOffComponent}
      >
        {/* Begin portfolio Item inner container. This container handles styling for highlighted/grey */}
        <div
          className={
            this.props.highlight
              ? styles.portfolio_item
              : styles.portfolio_item_grey
          }
          href={this.props.repoLink}
          target="_blank"
        >
          <img
            className={`img-fluid ${
              this.props.highlight
                ? styles.portfolio_item_img
                : styles.portfolio_item_img_grey
            }`}
            src={`${process.env.PUBLIC_URL}/${this.props.imageName}`}
            alt={this.props.title}
          />
          {/* Being project title container. Only appears if props.displayTitle is true */}
          {this.props.displayTitle ? (
            <div
              className={
                this.props.highlight
                  ? styles.projectTitle
                  : styles.projectTitleGrey
              }
            >
              {/* Inner text container only exists to handle media query for font size */}
              <div
                className={
                  this.props.mobileSize
                    ? styles.titleInnerMobile
                    : styles.titleInner
                }
              >
                {this.props.title[0].toUpperCase() + this.props.title.slice(1)}
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Begin mouse-over detail overlay for project card */}
          <div
            className={styles.portfolio_item_hover}
            style={{ visibility: this.state.mouseOver ? "visible" : "hidden" }}
          >
            <h3>
              {this.props.title[0].toUpperCase() + this.props.title.slice(1)}
            </h3>
            <p>{this.props.summary}</p>
            {/* Button container for deploy and repo links */}
            <div className={styles.buttonContainer}>
              {this.props.deployLink ? (
                <a
                  className="btn btn-light"
                  href={this.props.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
              ) : (
                ""
              )}
              {this.props.repoLink ? (
                <a
                  className="btn btn-light"
                  href={this.props.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Source Code
                </a>
              ) : (
                ""
              )}
            </div>
            {/* End link button container */}
          </div>
          {/* End mouseover detail overlay */}
        </div>
        {/* End portfolio inner container */}
      </div>
    );
  }
}

export default ProjectCard;
