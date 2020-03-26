import React from "react";
import styles from "./styles/About.module.css";

class About extends React.Component {
  render() {
    return (
      <div className={` ${styles.mainContentArea} container`}>
        <div className="row justify-content-around">
          <div className={`${ this.props.mobileSize ? styles.aboutTextContainerMobile :styles.aboutTextContainer} col-12 col-md-8`}>
            <div className={styles.introHeader}>Hi, I'm Dan!</div>
            <p className={styles.introText}>
              Web Developer with a background in the arts and theatre technology
            </p>
          </div>
          <div className={`col-12 col-md-4`}>
            <figure className="profilePic">
              <img
                src={process.env.PUBLIC_URL + "/danielgoldphoto.jpg"}
                className={` ${styles.profilePic} img-fluid my-3`}
                alt="Daniel Gold"
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
