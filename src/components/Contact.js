import React from "react";
import ContactCard from "./ContactCard";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="row">
          <ContactCard
            imageName={'test.jpg'}
            title={'Lorem Ipsum'}
            link={'#'}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
