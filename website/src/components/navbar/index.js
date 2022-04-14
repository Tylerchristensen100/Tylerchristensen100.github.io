import React from "react";
import {Nav, NavLink, NavMenu} from "./navbarElements";

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/streak">Streak</NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;