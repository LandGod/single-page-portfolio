import React from "react";
import IconBar from "./IconBar";
import TextBaloon from "./TextBaloon";

class About extends React.Component {
  render() {
    return (
      <div className="container mainContentArea">
        <div className="row justify-content-end">

        <div className="textBaloonComponent col-12 col-md-8 mt-5">
                <TextBaloon />
            </div>
          <div className="col-12 col-md-4">
            <figure className="profilePic">
              <img
                src={process.env.PUBLIC_URL + "/danielgoldphoto.jpg"}
                className="img-fluid my-3"
              />
            </figure>
            <div className="spacer"> </div>
            <div className="iconBarComponent">
              <IconBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
