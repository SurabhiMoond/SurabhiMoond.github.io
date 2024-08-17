import React, { useState } from "react";
import surabhiImg from "../../Images/image.png";
import StyleSwitcher from "../Themes/StyleSwitcher";
import "../CSS/Home.css";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  // Function to scroll to different sections based on id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="min-h-[100vh] relative md:pt-20 fadeInTopAnimation">
<div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center full-screen items-center py-[50px]">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Surabhi</h2>
            <h1>Full-Stack Web Developer</h1>
            {/* Scroll buttons replacing NavLink */}
            <button
              className="btn-1 outer-shadow hover-in-shadow"
              onClick={() => scrollToSection("about")}
            >
              More About Me
            </button>
            &nbsp;
            <button
              className="btn-1 outer-shadow hover-in-shadow"
              onClick={() => scrollToSection("portfolio")}
            >
              Portfolio
            </button>
            &nbsp;
            <button
              className="btn-1 outer-shadow hover-in-shadow hover-color-red"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            &nbsp;
          </div>

          <div className="home-image">
            <div className="img-box inner-shadow min-w-36">
              <img
                src={surabhiImg}
                alt="Surabhi"
                className="my-image outer-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <StyleSwitcher /> */}
    </div>
  );
};

export default Home;


