import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "../CSS/HamburgerMenu.css"; // Import the CSS file

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // Close the hamburger menu after scrolling
  };

  return (
    <div>
      <div className="ham-color">
        <Hamburger toggled={isOpen} toggle={setOpen} size={21} rounded />
      </div>
      {isOpen && (
        <nav className="nav-menu">
          <div className="flex items-center justify-center h-full">
            <div className="p-4 flex flex-col gap-10">
              <button
                className="nav-link btn-1 outer-shadow hover-in-shadow"
                onClick={() => scrollToSection("home")}
              >
                Home
              </button>
              <button
                className="nav-link btn-1 outer-shadow hover-in-shadow"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="nav-link btn-1 outer-shadow hover-in-shadow"
                onClick={() => scrollToSection("portfolio")}
              >
                Portfolio
              </button>
              <button
                className="nav-link btn-1 outer-shadow hover-in-shadow"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
          </div>
          <p className="copyright-text">&copy; 2024 Surabhi Moond </p>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
