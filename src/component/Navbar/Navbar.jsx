import React, { useState,useEffect } from 'react'
import '../../Styles/Navbar.css'
import resume from '../../Assets/Resume.pdf'

function Navbar() {

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);


  return (
    <nav className="navbar">
      <div className="progressbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "6px",
          backgroundColor: "#FF4500",
          zIndex: 1000,
        }}
      ></div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact_resume">Contact Me</a></li>
        <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
