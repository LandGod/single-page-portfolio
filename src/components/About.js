import React from "react";
import IconBar from "./IconBar";
import TextBaloon from "./TextBaloon";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-4 mainContentArea">
            <figure className="profilePic">
              <img
                src={process.env.PUBLIC_URL + "/danielgoldphoto.jpg"}
                className="img-fluid my-3"
                alt="Daniel Gold"
              />
            </figure>
            <div className="overlapContainer">
              <div className="textBaloonComponent mt-md-5">
                <TextBaloon />
              </div>
              <div className="iconBarComponent">
                <IconBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
