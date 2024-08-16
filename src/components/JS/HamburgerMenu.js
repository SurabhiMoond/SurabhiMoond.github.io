import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "../CSS/HamburgerMenu.css"; // Import the CSS file

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div className="ham-color">
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    size={21}
                    rounded
                />
            </div>
            {isOpen && (
                <nav className="nav-menu">
                    <div className="flex items-center justify-center h-full">
                        <div className="p-4 flex flex-col gap-10">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link btn-1 outer-shadow hover-in-shadow ${
                                        isActive ? "inner-shadow active" : ""
                                    }`
                                }
                                onClick={() => setOpen(false)}>
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link btn-1 outer-shadow hover-in-shadow ${
                                        isActive ? "inner-shadow active" : ""
                                    }`
                                }
                                onClick={() => setOpen(false)}>
                                About
                            </NavLink>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    `nav-link btn-1 outer-shadow hover-in-shadow ${
                                        isActive ? "inner-shadow active" : ""
                                    }`
                                }
                                onClick={() => setOpen(false)}>
                                Portfolio
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `nav-link btn-1 outer-shadow hover-in-shadow ${
                                        isActive ? "inner-shadow active" : ""
                                    }`
                                }
                                onClick={() => setOpen(false)}>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <p className="copyright-text">&copy; 2024 Kumari Surabhi </p>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;
