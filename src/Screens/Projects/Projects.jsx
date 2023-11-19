import React from "react";
import "./project.css";
import "animate.css";
import ProjectDetails from "./ProjectDetails";

export default function Projects() {
  return (
    <div className="projectContainer paddingTop animate__animated animate__fadeIn">
      <h1 className="projectsHeading">Projects</h1>
      <ProjectDetails />
    </div>
  );
}
