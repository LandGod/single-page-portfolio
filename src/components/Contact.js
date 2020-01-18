import React from "react";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Contact</h1>
          </div>
        </div>
        <div className="row">
          <ContactCard
            imageName="linkedinlogo.png"
            title="Daniel Gold on LinkedIn"
            link="https://www.linkedin.com/in/danjasongold/"
          />
        </div>
      </div>
    );
  }
}

export default Contact;
