import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="I worked at McDonals"
            description="description"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="I wish that were true"
            description="helo there"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div
          onClick={() => {
            setActiveTitle("my second feature");
          }
          }
          click to view second feature
          ></div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}