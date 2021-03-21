import React from "react";

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
      <div className="contact__container">
        <div
          className="contact__card"
          href={this.props.repoLink}
          target="_blank"
        >
          {this.props.customClickAction ? (
            <button
              onClick={this.props.customClickAction}
              className="contact__link btn btn-link"
            >
              <img
                className="contact__image img-fluid"
                src={`${process.env.PUBLIC_URL}/social_images/${this.props.imageName}`}
                alt={this.props.title}
              />
            </button>
          ) : (
            <a
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              <img
                className="contact__image"
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
