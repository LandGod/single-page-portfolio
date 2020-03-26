import React from "react";
import styles from "./styles/About.module.css";

class About extends React.Component {
  render() {
    return (
      <div className={` ${styles.mainContentArea} container`}>
        <div className="row justify-content-around">
          {/* Column containing text (with media query) */}
          <div
            className={`${
              this.props.mobileSize
                ? styles.aboutTextContainerMobile
                : styles.aboutTextContainer
            } col-12 col-md-8`}
          >
            {/* Header and paragraph tag must be enclosed or flexbox will put them side-by-side when centering */}
            <div>
              <div className={styles.introHeader}>Hi, I'm Dan!</div>
              <p className={styles.introText}>
                Web Developer with a background in the arts and theatre
                technology
              </p>
            </div>
          </div>

          {/* Column containing profile picture */}
          <div className={`col-12 col-md-4`}>
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/danielgoldphoto.jpg"}
                className={`${styles.profilePic} img-fluid my-3`}
                alt="Daniel Gold"
              />
            </figure>
          </div>
          {/* End image column*/}
        </div>
        {/* End row */}
      </div>
    );
  }
}

export default About;
