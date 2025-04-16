import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import tiktok from "../assets/tiktok.png";
import instagram from "../assets/instagram.png";
import { Facebook, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logofooter">
        <img src={logo} alt="Logo Web" />
      </div>

      <div className="section">
        <h4>Layanan</h4>
        <p>Menerima Sablon Kaos</p>
        <p>Menerima Pembuatan Banner</p>
      </div>

      <div className="section">
        <h4>Follow us</h4>
        <div className="social-icons">
          <a href="https://wa.me/6283867775464">
            <Phone color="#000" />
          </a>
          <a href="https://www.facebook.com/share/19QrDj3QqC/">
            <Facebook color="#000" />
          </a>
          <a href="https://www.instagram.com/taukemuda2?igsh=bGhtMGJnbWM5Nmh1">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <p className="copyright">
          © 2025 Irregular Fashion Store. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
