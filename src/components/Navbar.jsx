import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import pencarian from "../assets/pencarian.png";
import MobileSidebar from "./Sidebar";
import { AlignJustify, Search } from "lucide-react";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-wrap">
            <div className="nav-logo">
              <img src={logo} alt="Logo Web" className="logo-web" />
            </div>

            <ul className="nav-menu">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">
                  HOME
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/products" className="navbar-link">
                  PRODUCT
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="navbar-link">
                  CONTACT
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="navbar-link">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <Search className="search-ico" />
          </div>

          <div className="hamburger-menu" onClick={toggleSidebar}>
            <AlignJustify />
          </div>
        </div>
      </nav>
      <MobileSidebar isOpen={isOpen} onClick={toggleSidebar} />
    </>
  );
};
