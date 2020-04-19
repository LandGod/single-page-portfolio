import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";

const { Brand, Toggle, Collapse } = Navbar;

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
      className="nav__opener"
      style={{
        height: open ? "54px" : "0px",
        overflow: overflow ? "visible" : "hidden",
      }}
    >
      <Navbar className="bg-light" expand="md">
        <Brand href="#aboutSection">Dan Gold</Brand>
        <Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
        />
        <Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#portfolioSection">Portfolio</Nav.Link>
            <Nav.Link href="#contactSection">Contact</Nav.Link>
            <Nav.Link
              href={`${process.env.PUBLIC_URL}/DanielGold.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
