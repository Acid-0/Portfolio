import React from "react";
import "./NavbarComp.css"; // Import your CSS file for styling
import { HiMoon } from "react-icons/hi";
import { FaSun } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#2962ff" : "",
    textDecoration: "none",
    fontWeight: isActive ? "600" : "",
  });
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to={"/"} className="name_item">
          Name
        </Link>
        <NavLink to={"/"} style={linkStyle} className="navbar-item">
          Home
        </NavLink>
        <NavLink to={"publications"} style={linkStyle} className="navbar-item">
          Publications
        </NavLink>
        <NavLink to={"projects"} style={linkStyle} className="navbar-item">
          Projects
        </NavLink>
        <NavLink to={"interests"} style={linkStyle} className="navbar-item">
          Interests
        </NavLink>
        {/* <div className="navbar-item">Researches</div> */}
      </div>
      <div className="navbar-right">
        <div className="navbar-icon">
          <HiMoon color="#209cee" />
        </div>
        <div className="navbar-icon">
          <FaSun color="#209cee" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
