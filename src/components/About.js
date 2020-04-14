import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container" id="aboutSection">
        <div className="row justify-content-around">
          {/* Column containing text (with media query) */}
          <div className="about__text-container col-12 col-md-8">
            {/* Header and paragraph tag must be enclosed or flexbox will put them side-by-side when centering */}
            <div>
              <div className="about__header">Hi, I'm Dan!</div>
              <p className="about__text">
                Web Developer with a background in the arts and theatre
                technology
              </p>
            </div>
          </div>

          {/* Column containing profile picture */}
          <div className="about__img-container col-12 col-md-4">
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + "/misc_images/danielgoldphoto.jpg"
                }
                className="about__img img-fluid my-3"
                alt="Daniel Gold"
              />
            </figure>
          </div>
          {/* End image column*/}
        </div>
        {/* End row */}
      </div>
    );
  }
}

export default About;
