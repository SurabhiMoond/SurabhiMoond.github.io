import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css"; 
import HamburgerMenu from "./HamburgerMenu";
import Loader from "./loader"; 

const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleHomeClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="header">
            {isLoading && <Loader />}

            <div className="container">
                <div className="flex flex-wrap justify-between">
                    <NavLink
                        to="/"
                        className="btn-1 outer-shadow hover-in-shadow"
                        onClick={handleHomeClick}>
                        Home
                    </NavLink>
                    <div className="hamburger-btn outer-shadow hover-in-shadow">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
