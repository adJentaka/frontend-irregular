import { Boxes, Home, Info, Phone } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileSidebar.css";

const MobileSidebar = ({ isOpen, onClick }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Home />
            <Link to="/" onClick={onClick}>
              Home
            </Link>
          </li>
          <li>
            <Boxes />
            <Link to="/products" onClick={onClick}>
              Product
            </Link>
          </li>
          <li>
            <Info />
            <Link to="/about" onClick={onClick}>
              About
            </Link>
          </li>
          <li>
            <Phone />
            <Link to="/contact" onClick={onClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={onClick}></div>}
    </>
  );
};

export default MobileSidebar;
