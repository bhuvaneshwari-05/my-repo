import React from "react";
import "./Contact.css"; // Ensure you have this file for styling
import background from "../assets/image.png";
const Contact = () => {
  return (
  <div className="contact" style={{ backgroundImage: `url(${background})` }}>
    
    <div className="contact-container">
    <h2>Contact Me</h2>
    <div className="links">
        <a href="mailto:your-email@gmail.com">
            📧 your-email@gmail.com
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
        </a>
    </div>
    <div className="note-container">
        <span>😊 Looking forward to connecting with you!!!</span>
    </div>
</div>


</div>


  );
};

export default Contact;
