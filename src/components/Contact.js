import React from 'react';
import "./Contact.css";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import location from "../assets/location.png";
import katalog from "../assets/katalog.webp";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <div className="info-item">
                    <img src={email} alt="Email" className="icon" />
                    <p>irregularstore@gmail.com</p>
                </div>
                <div className="info-item">
                    <img src={whatsapp} alt="WhatsApp" className="icon" />
                    <p>+62 838-6777-5464</p>
                </div>
                <div className="info-item">
                    <img src={location} alt="Location" className="icon" />
                    <p>
                        W29V+V7X, Sumber, Kebumen, Kec. Sukorejo, Kabupaten Kendal,
                        Jawa Tengah 51363
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