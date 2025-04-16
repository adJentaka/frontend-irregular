import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";
import pencarian from "../assets/pencarian.png";
import MobileSidebar from './Sidebar';
import {AlignJustify} from "lucide-react"

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
        <nav className='navbar'>
            <div className='navbar-logo' >
                <img src={logo} alt="Logo Web" className="logo-web" />  
            </div>

            <ul className='navbar-menu'>
                <li className='navbar-item'>
                    <Link to="/" className="navbar-link">HOME</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/product" className="navbar-link">PRODUCT</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/contact" className="navbar-link">CONTACT</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/about" className="navbar-link">ABOUT</Link>
                </li>
            </ul>

            <div className='navbar-search'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={handleSearchChange}
                    className="search-input"
                />
            </div>
            
            <div className='hamburger-menu' onClick={toggleSidebar}>
                <AlignJustify/>
            </div>
        </nav>
        <MobileSidebar isOpen={isOpen} onClick={toggleSidebar} />
        </>
    );
};
