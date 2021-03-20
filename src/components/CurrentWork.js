import React from "react";

class Contact extends React.Component {
  state = { showEmailPopup: false };

  togglePopup = () => {
    this.setState({ showEmailPopup: !this.state.showEmailPopup });
  };

  copyEmail = () => {
    // Get the text field
    const copyText = document.getElementById("contact__email");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    // Copy the text inside the text field
    document.execCommand("copy");
  };

  render() {
    return (
      <div className="container mx-auto" id="currentWorkSection">
        <div className="w-full mt-5 text-5xl lg:text-6xl font-bold text-center mb-2">
          <h1 className="mb-2">Current Work</h1>
          <hr className="contact__hr" />
        </div>
        <div className="row px-6 lg:px-24">
          <ul>
            <li className="mb-4">
              <h3 className="text-3xl lg:text-4xl font-semibold">
                <a
                  href="https://jaquishbiomedical.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Jaquish Biodmedical
                </a>
              </h3>
              <a
                href="https://jaquishbiomedical.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5 className="text-xl lg:text-2xl">Lead Web Developer</h5>
              </a>
              <div>
                Hugo | HTML | SCSS | JavaScript | TailwindCSS | Netlify | AWS
                Lambda
              </div>
            </li>
            <li className="mb-4">
              <h3 className="text-3xl lg:text-4xl font-semibold inline-block">
                <a
                  href="https://www.upwork.com/o/profiles/users/~01b3a381f688771981/"
                  target="_blank"
                  rel="noreferrer"
                >
                  UpWork
                </a>
              </h3>
              <a
                href="https://support.upwork.com/hc/en-us/articles/211068468-Top-Rated"
                target="_blank"
                rel="noreferrer"
              >
                <image className="ml-3 pt-2 inline-block h-6">
                  <img
                    className=""
                    src="/misc_images/upworkTopRated.png"
                    alt="Top Rated Badge"
                  />
                </image>
              </a>
              <a
                href="https://www.upwork.com/o/profiles/users/~01b3a381f688771981/"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="text-xl lg:text-2xl block">
                  Freelance Web Developer
                </h5>
              </a>
              <div>
                React | HTML | CSS | JavaScript | TypeScript | PHP | Python
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
