import React from "react";
import styles from "./styles/ContactCard.module.css";

class ContactCard extends React.Component {
  // Props:
  // imageName: file name of image to be displayed
  // title: Alt Text
  // link: link to social site or file
  // customClickAction: Icon is rendered as a button instead and uses the supplied function as its onclick

  linkToRepo = () => {
    window.open(this.props.repoLink);
  };

  render() {
    return (
      <div className={`col-6 col-md-3 p-1 p-md-2 ${styles.card_container}`}>
        <div
          className={styles.portfolio_item}
          href={this.props.repoLink}
          target="_blank"
        >
          {this.props.customClickAction ? (
            <button
              onClick={this.props.customClickAction}
              className={styles.portfolio_item_link}
            >
              <img
                className={`img-fluid ${styles.portfolio_item_img}`}
                src={`${process.env.PUBLIC_URL}/social_images/${this.props.imageName}`}
                alt={this.props.title}
              />
            </button>
          ) : (
            <a
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.portfolio_item_link}
            >
              <img
                className={`img-fluid ${styles.portfolio_item_img}`}
                src={`${process.env.PUBLIC_URL}/social_images/${this.props.imageName}`}
                alt={this.props.title}
              />
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default ContactCard;
