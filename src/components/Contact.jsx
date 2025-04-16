import React from "react";
import "./Contact.css";
import katalog from "../assets/katalog.webp";
import { Mail, Map, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-item">
          <Mail className="icon" />
          <p>irregularstore@gmail.com</p>
        </div>
        <div className="info-item">
          <Phone className="icon" />
          <p>+62 838-6777-5464</p>
        </div>
        <div className="info-item">
          <Map className="icon" size={40} />
          <p>
            W29V+V7X, Sumber, Kebumen, Kec. Sukorejo, Kabupaten Kendal, Jawa
            Tengah 51363
          </p>
        </div>
      </div>

      <div className="contact-image">
        <img src={katalog} alt="Katalog" />
      </div>
    </div>
  );
};

export default Contact;

