import React from "react";
import "./About.css";
import CutePic from "../../assets/Nadine Meister_Headshot.JPG";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className = "intro-picture" />
        </div>
        <div className="intro-item">
          My name is Nadine Meister, I'm from Maryland.
        </div>
      </div>
    </div>
  );
}
