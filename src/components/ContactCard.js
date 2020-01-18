import React from "react";
import styles from "./styles/ProjectCard.module.css";

class ContactCard extends React.Component {
  // Props:
  // imageName: file name of image to be displayed
  // title: Alt Text
  // link: link to social site or file

  linkToRepo = () => {
    window.open(this.props.repoLink);
  };

  render() {
    return (
      <div className={`col-2 col-md-4 p-1 p-md-2 ${styles.card_container}`}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
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
        </a>
      </div>
    );
  }
}

export default ContactCard;
