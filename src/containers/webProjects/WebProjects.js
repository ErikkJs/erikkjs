import React from "react";
import "./WebProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="projects"> 
      <div>
        <h1 className="skills-heading">{bigProjects.title}</h1>
        <p className="subTitle project-subtitle">{bigProjects.subtitle}</p>
        <div className="web-projects">
            {bigProjects.projects.map(project => {
              return (
                <div className="company-worked-with" onClick={() => openProjectInNewWindow(project.link)}>
                  <div className="company-logo-container"> <img className="company-logo" alt={project.alt} src={project.image}></img></div> 
                </div>
              );
            })}
          <div className="starup-project-image"></div>
        </div>
      </div>
    </div>
    </Fade>
  );
}
