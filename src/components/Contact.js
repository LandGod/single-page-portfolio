import React from "react";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  render() {
    return (
      <div className="container" id="contactSection">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="contactHOne" >Contact</h1>
          </div>
        </div>
        <div className="row ">
        <ContactCard
            imageName="twitter.svg"
            title="Daniel Gold on Twitter"
            link="https://twitter.com/DanGoldLandGod"
          />
          <ContactCard
            imageName="linkedin.svg"
            title="Daniel Gold on LinkedIn"
            link="https://www.linkedin.com/in/danjasongold/"
          />
          <ContactCard
            imageName="github.svg"
            title="LandGod on GitHub"
            link="https://www.github.com/landgod"
          />
          <ContactCard
            imageName="email.svg"
            title="DanielJasonGold@gmail.com"
            customClickAction={()=>console.log("Log email (test)")}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
