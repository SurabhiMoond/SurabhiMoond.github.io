import React, { useState } from "react";
import "../CSS/About.css";
import Skills from "./Skills";
import surabhiImg from "../../Images/image.png";
import StyleSwitcher from "../Themes/StyleSwitcher";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-20 p-0 min-h-[100vh] fadeInTopAnimation">
      {/* <StyleSwitcher /> */}
      <div className="container">
        <div className="flex flex-wrap">
          <div className="section-title">
            <p style={{ fontSize: "2rem", marginLeft: "-1rem" }}>About Me</p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="about-img min-w-16">
            <div className="img-box inner-shadow hover-effect min-w-16">
              <img
                src={surabhiImg}
                alt="Surabhi Image"
                className="outer-shadow rounded-image"
              />
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/surabhi12/"
                target="_blank"
                rel="noopener noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/SurabhiMoond"
                target="_blank"
                rel="noopener noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:surabhi24jrk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <MdEmail />
              </a>
            </div>
          </div>

          <div className="about-info">
            <p>
              I am <span>Surabhi</span>, a passionate and dedicated{" "}
              <span>Full-Stack Web Developer</span> with a strong background in
              both frontend and backend technologies. After completing an
              intensive <span>Full-Stack Web Development</span> course at Masai
              School, I have honed my skills through hands-on projects and
              collaboration in a fast-paced, dynamic environment.
            </p>
            <p>
              Throughout my learning journey, I have worked with various modern
              technologies such as{" "}
              <span>
                HTML, CSS, JavaScript, React, Redux, TypeScript, MongoDB
              </span>
              , and more. I am also proficient in solving problems using{" "}
              <span>Data Structures and Algorithms</span>.
            </p>
            <p>
              I am currently seeking opportunities to apply my expertise as a{" "}
              <span>Frontend Developer</span>, eager to contribute to innovative
              projects and continuously grow in a professional setting.
            </p>

            <div>
              <a
                href="/path-to-cv.pdf" // Update with the correct path or URL
                className="btn-1 outer-shadow hover-in-shadow mt-10"
                download
              >
                Download CV
              </a>

              <button
                className="btn-1 outer-shadow hover-in-shadow ml-5"
                onClick={() => scrollToSection("contact")}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="about-tabs">
            {/* Tab content can be added here */}
          </div>
        </div>

        <div className="tab-content">
          {activeTab === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
};

export default About;
