import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Nadine Meister</h1>
        <div className="info-bar">
          <p className="info-item">nmeister@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link"
            to={{pathname: "https://www.instagram.com/nadinee.me/"}}
            target="_blank"
          >
            Instagram
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://github.com/nadinem100"}}
            target="_blank"
          >
            GitHub
          </Link>
          <Link 
            className="info-link"
            to={{pathname: "https://www.linkedin.com/in/nadine-meister-519743189/"}}
            target="_blank"
          >
            LinkedIn
          </Link>
          
        </div>
      </div>
      <div className="nav-background">
      <Link to={{pathname: "/about"}}> About </Link>
      <Link to={{pathname: "/experience"}}> Experiences </Link>
      <Link to={{pathname: "/projects"}}> Projects </Link>
      <Link to={{pathname: "/education"}}> Education </Link>
      <Link to={{pathname: "/other"}}> Other </Link>
        <p> </p>
      </div>
    </>
  );
}
