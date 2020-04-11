import React from "react";
import ToolTip from "./ToolTip";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  state = { showEmailPopup: false };

  togglePopup = () => {
    this.setState({ showEmailPopup: !this.state.showEmailPopup });
  };

  emailTooltipInner = () => {
    return (
      <div className="container p-2" tabIndex="-1">
        <div className="row">
          <textarea id="vanillaTextarea" className="col-12 text-center" readOnly>DanielJasonGold@gmail.com</textarea>
        </div>
        <div className="row">
          <button className="btn btn-sm btn-light mx-auto" onClick={() => {alert('Clicked!')}}>
            Copy
          </button>
          <a
            className="btn btn-sm btn-light mx-auto"
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
      <div className="container" id="contactSection">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="contactHOne">Contact</h1>
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
              content={this.emailTooltipInner()}
              showTooltip={this.state.showEmailPopup}
              flip={true}
              activationType="click"
              responsive="true"
              offset="-115px"
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
  }
}

export default Contact;
