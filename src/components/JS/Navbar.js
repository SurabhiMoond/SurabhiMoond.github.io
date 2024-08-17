import React, { useState } from "react";
import "../CSS/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import Loader from "./loader";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  const scrollToSection = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth" });
      setIsLoading(false); 
    }, 300); 
  };

  return (
    <div className="header">
      {isLoading && <Loader />}

      <div className="container">
        <div className="flex flex-wrap justify-between">
          <button
            className="btn-1 outer-shadow hover-in-shadow"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          {/* <button
            className="btn-1 outer-shadow hover-in-shadow"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="btn-1 outer-shadow hover-in-shadow"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>
          <button
            className="btn-1 outer-shadow hover-in-shadow"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button> */}

          <div className="hamburger-btn outer-shadow hover-in-shadow">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
