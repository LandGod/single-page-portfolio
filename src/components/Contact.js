import React from "react";
import ToolTip from "./ToolTip";
import ContactCard from "./ContactCard";
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

  emailTooltipInner = (bgWhite) => {
    return (
      <div className="container" tabIndex="-1">
        <div className="row">
          <textarea
            id={`${bgWhite ? "contact__email--blue" : "contact__email"}`}
            className="col-12 text-center p-0 m-0"
            value="DanielJasonGold@gmail.com"
            readOnly
          />
        </div>
        <div className="row">
          <button
            className={`btn btn-sm btn-light mx-auto ${ bgWhite ? "modal__button--blue" : ''}`}
            onClick={this.copyEmail}
          >
            Copy
          </button>
          <a
            className={`btn btn-sm btn-light mx-auto ${ bgWhite ? "modal__button--blue" : ''}`}
            href="mailto:DanielJasonGold@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compose
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <MediaContext.Consumer>
        {(context) => {
          const { smBreakPoint, isIE } = context;
          return (
            <div className="container" id="contactSection">
              <div className="row">
                <div className="col-12 mt-5">
                  <h1>Contact</h1>
                  <hr className="contact__hr" />
                </div>
              </div>
              <div className="row ">
                <div className="col-6 col-md-3 p-1 p-md-2">
                  <ContactCard
                    imageName="twitter.svg"
                    title="Daniel Gold on Twitter"
                    link="https://twitter.com/DanGoldLandGod"
                  />
                </div>
                <div className="col-6 col-md-3 p-1 p-md-2">
                  <ContactCard
                    imageName="linkedin.svg"
                    title="Daniel Gold on LinkedIn"
                    link="https://www.linkedin.com/in/danjasongold/"
                  />
                </div>
                <div className="col-6 col-md-3 p-1 p-md-2">
                  <ContactCard
                    imageName="github.svg"
                    title="LandGod on GitHub"
                    link="https://www.github.com/landgod"
                  />
                </div>
                <div className="col-6 col-md-3 p-1 p-md-2">
                  <ToolTip
                    content={this.emailTooltipInner(smBreakPoint ? true : false)}
                    showTooltip={this.state.showEmailPopup}
                    flip={true}
                    activationType="click"
                    responsive="true"
                    offset="-115px"
                    subModal={smBreakPoint || isIE ? true : false}
                  >
                    <ContactCard
                      imageName="email.svg"
                      title="DanielJasonGold@gmail.com"
                      customClickAction={this.togglePopup}
                    />
                  </ToolTip>
                </div>
              </div>
            </div>
          );
        }}
      </MediaContext.Consumer>
    );
  }
}

export default Contact;
