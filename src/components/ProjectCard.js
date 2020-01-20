import React from "react";
import styles from "./styles/ProjectCard.module.css";

class ProjectCard extends React.Component {
  // Props:
  // width: "single" or "double" - Makes the component 4 or 8 columns in medium view
  // imageName: file name of image to be displayed
  // title: Name of project/title
  // repoLink: link to project repo
  // deployLink: link to deployed project

  state = {
    width: this.props.width || "single", // single or double (4 col / 8 col)
    imageName: this.props.imageName,
    mouseOver: false
  };

  mouseOnComponent = () => {
      this.setState({mouseOver: true})
  };

  mouseOffComponent = () => {
      this.setState({mouseOver: false})
  };

  linkToRepo = () => {
    window.open(this.props.repoLink);
  };

  render() {
    return (
      <div
        className={`col-${this.state.width === "double" ? "12" : "6"} col-md-${
          this.state.width === "double" ? "6" : "4"
        } p-1 p-md-2 ${ this.state.mouseOver ? styles.card_container_hover : styles.card_container}`} 
        onMouseEnter={this.mouseOnComponent}
        onMouseLeave={this.mouseOffComponent}
      >
        <a href={this.props.repoLink} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.portfolio_item}
            href={this.props.repoLink}
            target="_blank"
          >
            <img
              className={`img-fluid ${styles.portfolio_item_img}`}
              src={`${process.env.PUBLIC_URL}/${this.state.imageName}`}
              alt={this.props.title}
            />
          </div>
          <div
            className={styles.title_overlay}
            href={this.props.repoLink}
            target="_blank"
          >
            {this.props.title[0].toUpperCase() + this.props.title.slice(1)}
          </div>
        </a>
        {this.props.deployLink ? (
          <div className={styles.repo_overlay}>
            <a
              className={styles.repo_overlay_a}
              href={this.props.deployLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ProjectCard;
