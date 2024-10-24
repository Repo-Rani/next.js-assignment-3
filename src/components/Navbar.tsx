"use client";
import React from "react";
import Link from "next/link";
import ToggleButton from "./ToggleButton";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";
const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };
  return (
    <>
      <ToggleButton isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <h1>
              Rani<span>Creations</span>{" "}
            </h1>
          </div>
          <ul>
            <li>
              <Link href="#home" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="menu-item">
                Skills
              </Link>
            </li>

            <li>
              <Link href="#experience" className="menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#projects" className="menu-item">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="menu-item">
                Contact
              </Link>
            </li>
            <a href="/Rani_Resume.pdf" download>
              <button className="resume-btn">Download Resume</button>
            </a>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
