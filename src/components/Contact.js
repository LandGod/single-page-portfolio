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
    const copyText = document.getElementById("contact__email") || document.getElementById("contact__email--blue");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // Copy the text inside the text field
    document.execCommand("copy");
  };

  emailTooltipInner = (bgWhite) => {
    return (
      <div className="container" tabIndex="-1">
        <div className="flex flex-row">
          <textarea
            id={`${bgWhite ? "contact__email--blue" : "contact__email"}`}
            className="w-full text-center p-0 m-0 underline dotted"
            value="DanielJasonGold@gmail.com"
            readOnly
          />
        </div>
        <div className="flex-row">
          <button
            className={`btn btn-sm btn-light mx-auto ${ bgWhite ? "modal__button--blue" : ''} mr-1`}
            onClick={this.copyEmail}
          >
            Copy
          </button>
          <a
            className={`btn btn-sm btn-light mx-auto ${ bgWhite ? "modal__button--blue" : ''} ml-1`}
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
            <div className="container mx-auto" id="contactSection">
              <div className="flex flex-row">
                <div className="w-full mt-5">
                  <h1 className="text-6xl font-bold text-center">Contact</h1>
                  <hr className="contact__hr my-2" />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="inline-block w-1/2 md:w-1/4 p-1 p-md-2">
                  <ContactCard
                    imageName="twitter.svg"
                    title="Daniel Gold on Twitter"
                    link="https://twitter.com/DanJGold"
                  />
                </div>
                <div className="inline-block w-1/2 md:w-1/4 p-1 p-md-2">
                  <ContactCard
                    imageName="linkedin.svg"
                    title="Daniel Gold on LinkedIn"
                    link="https://www.linkedin.com/in/danjasongold/"
                  />
                </div>
                <div className="inline-block w-1/2 md:w-1/4 p-1 p-md-2">
                  <ContactCard
                    imageName="github.svg"
                    title="LandGod on GitHub"
                    link="https://www.github.com/landgod"
                  />
                </div>
                <div className="inline-block w-1/2 md:w-1/4 p-1 p-md-2">
                  <ToolTip
                    content={this.emailTooltipInner(smBreakPoint ? true : false)}
                    showTooltip={this.state.showEmailPopup}
                    flip={true}
                    activationType="click"
                    width={240}
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
