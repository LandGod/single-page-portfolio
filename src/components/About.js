import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container box-border" id="aboutSection"> {/* Id used for intra-page linking. Not used for css. Do not remove!*/}
        <div className="flex flex-row justify-around">
          {/* Column containing text (with media query) */}
          <div className="about__text-container w-full md:w-2/3">
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
          <div className="about__img-container w-full md:w-1/3">
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
