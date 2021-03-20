import React from "react";
import { MediaContext } from "../contexts/MediaContext";

class Contact extends React.Component {
  state = { showEmailPopup: false };

  togglePopup = () => {
    this.setState({ showEmailPopup: !this.state.showEmailPopup });
  };

  copyEmail = () => {
    // Get the text field
    const copyText = document.getElementById("contact__email");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // Copy the text inside the text field
    document.execCommand("copy");
  };

  render() {
    return (
      <MediaContext.Consumer>
        {(context) => {
          const { smBreakPoint, isIE } = context;
          return (
            <div className="container" id="currentWorkSection">
              <div className="row">
                <div className="col-12 mt-5">
                  <h1>Current Work</h1>
                  <hr className="contact__hr" />
                </div>
              </div>
              <div className="row">
                <ul>
                  <li className="mb-2">
                    <h3>
                      <a
                        href="https://jaquishbiomedical.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jaquish Biodmedical
                      </a>
                    </h3>
                    <h5>Lead Web Developer</h5>
                    <div>
                      Hugo | HTML | SCSS | JavaScript | TailwindCSS | Netlify |
                      AWS Lambda
                    </div>
                  </li>
                  <li className="mb-2">
                    <h3>
                      <a
                        href="https://www.upwork.com/o/profiles/users/~01b3a381f688771981/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        UpWork
                      </a>
                    </h3>
                    <h5>Freelance Web Developer</h5>
                    <div>
                      React | HTML | CSS | JavaScript | TypeScript | PHP |
                      Python
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </MediaContext.Consumer>
    );
  }
}

export default Contact;
