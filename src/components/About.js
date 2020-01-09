import React from "react";
import IconBar from ".//IconBar";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-8 mt-auto">
            <IconBar />
          </div>
          <div className="col-12 col-md-4">
            <figure>
              <img
                src={process.env.PUBLIC_URL + "/danielgoldphoto.jpg"}
                className="img-fluid my-3"
              />
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
