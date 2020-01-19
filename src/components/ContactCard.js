import React from "react";
import styles from "./styles/ContactCard.module.css";

class ContactCard extends React.Component {
  // Props:
  // imageName: file name of image to be displayed
  // title: Alt Text
  // link: link to social site or file
  //rounding: value for boarder radius

  linkToRepo = () => {
    window.open(this.props.repoLink);
  };

  render() {
    return (
      <div className={`col-6 col-md-4 p-1 p-md-2 ${styles.card_container}`}>
        <div
          className={styles.portfolio_item}
          href={this.props.repoLink}
          target="_blank"
        >
          <a href={this.props.link} target="_blank" rel="noopener noreferrer" className={styles.portfolio_item_link}>
            <img
              className={`img-fluid ${styles.portfolio_item_img}`}
              src={`${process.env.PUBLIC_URL}/${this.props.imageName}`}
              alt={this.props.title}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default ContactCard;
