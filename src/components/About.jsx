import React from "react";
import "./About.css";
import background from "../assets/image.png"; // Background Image
import profilePic from "../assets/photo.jpeg"; // Your Photo (Replace with actual filename)

function About() {
  return (
    <div className="about" style={{ backgroundImage: `url(${background})` }}>
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          {/* Profile Image */}
          <div className="profile-image">
            <img src={profilePic} alt="Profile" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h2>
              Allow me to introduce myself <span role="img" aria-label="smiley">😊</span>
            </h2>
            <p>I'm Bhuvaneshwari Subramani, a passionate engineering student.</p>
            <h3> My Interests</h3>
            <ul>
              <li>Web Development</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
