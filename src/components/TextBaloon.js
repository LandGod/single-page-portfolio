import React from "react";
import styles from "./styles/TextBaloon.module.css";

class TextBaloon extends React.Component {
  render() {
    return (
      <div className={`${styles.baloonMain} container`}>
        <div className="row pt-3">
          <div className="col-12 text-left">
            <h5>Summary</h5>
            <p>
              Web Developer with a background in the arts and theatre
              technology. Educated at the University of Washington Coding
              Bootcamp with skills in HTML, CSS, JavaScript, and Python.
              Detail-oriented problem solver with a passion for iterating new
              features to create better user experiences. Strengths in
              creativity, teamwork, and quick learning. Equally at home with
              front-end and back-end projects, and works well with others.
            </p>
            <h5>Skills</h5>
            <p>
              React, JavaScript, Node.js, Python, HTML, CSS, Express,
              Handlebars, mySQL, MongoDB, REST APIs
            </p>
            <h5>Additional Skills</h5>
            <p>Management, MS Office</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TextBaloon;
