import React from "react";
import styles from "./styles/ProjectCard.module.css";

class ProjectCard extends React.Component {
  // Props:
  // width: "single" or "double" - Makes the component 4 or 8 columns in medium view
  // imageName: file name of image to be displayed
  // title: Name of project/title
  // repoLink: link to project repo
  // deployLink: link to deployed project
  // highlight: number - 0: tech missing; 1: no techs selected; 2: has all selected techs
  // summary: Short summary of the project
  // displayTitle: boolean - set to true if the title needs to be displayed as text (not alreayd in the image)
  // mobileSize: boolean - true mean the media query for mobile size should be activated

  //FOR TESTING ONLY!!!!
  static defaultProps = {
    summary: `This website is built to promote myself, show off my work, 
  and provide a central point from which all of my projects, social media handles, 
  and resume can be viewed. Built by me, for me.`,
    displayTitle: true
  };
  //FOR TESTING ONLY!!!!

  state = {
    width: this.props.width || "single", // single or double (4 col / 8 col)
    imageName: this.props.imageName, // Probably not needed any more
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

  // linkToRepo = () => {
  //   window.open(this.props.repoLink);
  // };

  render() {
    return (
      // Container with sizing info for overall component. Is transformed during mouseover
      <div
        className={`col-${this.state.width === "double" ? "12" : "6"} col-md-${
          this.state.width === "double" ? "6" : "4"
        } p-1 p-md-2 ${
          this.state.mouseOver
            ? styles.card_container_hover
            : styles.card_container
        }`}
        onMouseEnter={this.mouseOnComponent}
        onMouseLeave={this.mouseOffComponent}
      >
        {/* Link to repo encapsulated entire component except deploy link */}
        <a href={this.props.repoLink} target="_blank" rel="noopener noreferrer">
          {" "}
        </a>
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
            src={`${process.env.PUBLIC_URL}/${this.state.imageName}`}
            alt={this.props.title}
          />
          {this.props.displayTitle ? (
            <div
              className={
                this.props.highlight
                  ? styles.projectTitle
                  : styles.projectTitleGrey
              }
            >
              <div className={ this.props.mobileSize ? styles.titleInnerMobile : styles.titleInner}>
                {this.props.title[0].toUpperCase() + this.props.title.slice(1)}
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className={styles.portfolio_item_hover}
            style={{ visibility: this.state.mouseOver ? "visible" : "hidden" }}
          >
            <h3>
              {this.props.title[0].toUpperCase() + this.props.title.slice(1)}
            </h3>
            <p>{this.props.summary}</p>
            <div className={styles.buttonContainer}>
              {this.props.deployLink ? (
                <a className="btn btn-light" href={this.props.deployLink}>
                  View Website
                </a>
              ) : (
                ""
              )}
              {this.props.repoLink ? (
                <a className="btn btn-light" href={this.props.repoLink}>
                  See Source Code
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
