import React, { useState, useEffect } from "react";

function NavBar() {
  // Reveal navar
  const [open, setOpen] = useState(false);
  // Track overflow for revealing further dropdowns (on mobile)
  const [overflow, setOverflow] = useState(false);

  const links = [
    { display: "Current Work", link: "#currentWorkSection" },
    { display: "Portfolio", link: "#portfolioSection" },
    {
      display: "Resume",
      link: `${process.env.PUBLIC_URL}/DanielGold.pdf`,
      external: true,
    },
  ];

  useEffect(() => {
    // Trigger reveal navbar (via making height not 0) as soon as user scrolls page.
    // Should never do anything after that initial scroll
    let onScroll;

    if (!open) {
      onscroll = (e) => {
        // Check for [tab] press
        if (e.keyCode) {
          if (e.keyCode !== 9) {
            return;
          }
        }
        // Reveal navbar
        setOpen(true);
      };

      window.addEventListener("scroll", onscroll, { once: "true" });
      window.addEventListener("keyup", onscroll, { once: "true" });
    }
    return () => {
      if (onScroll) {
        window.removeEventListener("scroll", onscroll);
        window.removeEventListener("keyup", onscroll);
      }
    };
  });

  return (
    <div
      className="nav__opener"
      style={{
        height: open ? "54px" : "0px",
        overflow: overflow ? "visible" : "hidden",
      }}
    >
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-100 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg leading-relaxed inline-block whitespace-no-wrap text-black font-semibold"
              href="#aboutSection"
            >
              Dan Gold
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => (open ? setOverflow(!overflow) : null)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-900"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  stroke="currentColor"
                  d="M3 18H21"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  stroke="#221b38"
                  d="M3 12H21"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1"
                  stroke="#221b38"
                  d="M3 6H21"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" + (open ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links.map((item, key) => (
                <li className="nav-item" key={key}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                    href={item.link}
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noreferrer" : ""}
                  >
                    <span className="ml-2">{item.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
