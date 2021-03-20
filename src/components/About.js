import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container box-border mx-auto px-6 lg:px-24" id="aboutSection"> {/* Id used for intra-page linking. Not used for css. Do not remove!*/}
        <div className="flex flex-row flex-wrap justify-around">
          {/* Column containing text (with media query) */}
          <div className="about__text-container w-full md:w-2/3">
            {/* Header and paragraph tag must be enclosed or flexbox will put them side-by-side when centering */}
            <div>
              <h1 className="text-6xl md:text-7xl mb-4 text-center md:text-left">Hi, I'm Dan!</h1>
              <h3 className="text-3xl md:text-4xl text-center md:text-left" role="doc-subtitle">
                Web Developer with a background in the arts and theatre
                technology
              </h3>
            </div>
          </div>

          {/* Column containing profile picture */}
          <div className="about__img-container w-full md:w-1/3 flex justify-end">
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
