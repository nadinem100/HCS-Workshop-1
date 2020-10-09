import React from "react";
import "./Other.css";
import CutePic from "../../assets/piano.jpg";

export default function OtherScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src = {CutePic} className = "intro-picture" />
        </div>
        <div className="intro-item">
          I play piano too!
        </div>
      </div>
    </div>
  );
}
