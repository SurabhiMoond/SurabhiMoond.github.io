import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import surabhiImg from "../../Images/image.png";
import StyleSwitcher from "../Themes/StyleSwitcher";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  function clickHandler() {
    window.scrollTo(0, 0);
    setOpen(false);
    console.log(isOpen);
  }
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
            <h2>I'm Surabhi </h2>
            <h1>Full-Stack Web Developer</h1>
            <NavLink
              to="/about"
              className={"btn-1 outer-shadow hover-in-shadow"}
              onClick={clickHandler}
            >
              More About Me
            </NavLink>{" "}
            &nbsp;
            <NavLink
              to="/portfolio"
              className={"btn-1 outer-shadow hover-in-shadow"}
              onClick={clickHandler}
            >
              Portfolio
            </NavLink>{" "}
            &nbsp;
            <NavLink
              to="/contact"
              className={"btn-1 outer-shadow hover-in-shadow hover-color-red"}
              onClick={clickHandler}
            >
              Contact
            </NavLink>{" "}
            &nbsp;
          </div>
          <div className=".home-image">
            <div className="img-box inner-shadow min-w-36">
              <img
                src={surabhiImg}
                alt="surabhiImg"
                className="my-image outer-shadow"
              />
            </div>
          </div>
        </div>
      </div>

      <StyleSwitcher></StyleSwitcher>
    </div>
  );
};

export default Home;
