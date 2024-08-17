import React from "react";
import Navbar from "./components/JS/Navbar";
import Home from "./components/JS/Home";
import About from "./components/JS/About";
import Contact from "./components/JS/Contact";
import Portfolio from "./components/JS/Projects";
import ScrollToTop from "./components/JS/ScrollToTop";
import StyleSwitcher from "./components/Themes/StyleSwitcher";

const App = () => {
  return (
    <div>
      <Navbar />
      <StyleSwitcher/>
      <ScrollToTop />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
