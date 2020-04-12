import React, { useState, useEffect } from "react";
import styles from "./styles/NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    // Trigger reveal navbar (via making height not 0) as soon as user scrolls page.
    // Should never do anything after that inital scroll
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
        // After reveal is finished, allow overflow permanently so that hamburger menue works
        setTimeout(() => setOverflow(true), 2000);
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
      className={styles.animateOpen}
      style={{
        height: open ? "54px" : "0px",
        overflow: overflow ? "visible" : "hidden",
      }}
    >
      <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between">
        <a className="navbar-brand" href="#aboutSection">
          Dan Gold
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#portfolioSection">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactSection">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`${process.env.PUBLIC_URL}/DanielGold.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
