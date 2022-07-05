import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink style={({ isActive }) => {
                        return { color: isActive ? "red" : "black" };
                    }} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => {
                        return { color: isActive ? "red" : "black" };
                    }} to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => {
                        return { color: isActive ? "red" : "black" };
                    }} to="/articles-list">Articles</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
