import { Boxes, Home, Info, LogOut, Phone } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../MobileSidebar.css";

const DashboardSidebar = ({ isOpen, onClick, onLogout }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-menu">
          <li>
            <Home />
            <Link to="/admin/dashboard" onClick={onClick}>
              Dashboard
            </Link>
          </li>
          <li>
            <Boxes />
            <Link to="/admin/products" onClick={onClick}>
              Product
            </Link>
          </li>
          <li>
            <button className="button-logout" onClick={onLogout}>
              <LogOut />
              Logout
            </button>
          </li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={onClick}></div>}
    </>
  );
};

export default DashboardSidebar;
