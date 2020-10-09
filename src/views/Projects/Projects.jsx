import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <Project
        title="Agent Based Modeling: COVID-19 Spread on Campus"
        description="I showed that it is not a good idea for schools to reopen unless they are mandating masks and testing frequently."
        link="https://google.com"
      />
      <Project
        title="Personal Portfolio"
        description="This website!!"
        link="https://bing.com"
      />
    </div>
  );
}