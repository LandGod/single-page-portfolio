import React from "react";
import ToolTip from "./ToolTip";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  state = { showEmailPopup: false };

  togglePopup = () => {
    this.setState({ showEmailPopup: !this.state.showEmailPopup });
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
              content={<div>DanielJasonGold@gmail.com</div>}
              showTooltip={this.state.showEmailPopup}
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
