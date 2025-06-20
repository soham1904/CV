import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/profile.png"; // Make sure this file exists

const Home = () => {
  const socialLinks = [
    { icon: <Github />, url: "https://github.com/soham1904" },
    { icon: <Linkedin />, url: "https://www.linkedin.com/in/soham-mandal-2a819425a/" },
    { icon: <Mail />, url: "sohammandal18@gmail.com" },
  ];

  return (
    <div className="home-container">
      <div className="home-card">
        <img src={profileImage} alt="Soham Mandal" className="profile-pic" />
        <h1>Soham Mandal</h1>
        <p className="subtitle">Frontend Developer | React Js, Javascript, Bootstrap </p>
        <p>•	2 years of experience in web development and research, expert in Python and Java.
<p>•	Created 5 secure web pages enhancing business website security and customer trust.</p>
•	Represented college at the E-Summit hosted by IIT Bombay, reached the top 20 with an impressive all-India rank of 17th, showcasing remarkable talent and strategic prowess.</p>
        <div className="social-links">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
