import React, { useState, useEffect } from "react";
import styles from "./styles/NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.animateOpen}
      style={{ height: open ? "54px" : "0px" }}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light justify-content-between`}
      >
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
