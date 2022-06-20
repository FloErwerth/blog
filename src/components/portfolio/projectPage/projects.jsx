import "./projects.scss";
import ProjectThumbnail from "./projectThumbnail/projectThumbnail";
import blogPic from "../projects/blog/pictures/blog2.png";
import paths from "../projects/multibodySimulation/PlanetaryPaths.png";
import buzznclickPic from "../projects/buzznclick/pictures/Startseite.jpg";
import Project from "./project/project";
import React, { useState, useEffect } from "react";
import Buzznclick from "../projects/buzznclick/buzznclick";
import Blog from "../projects/blog/blog";
import MultibodySimulation from "../projects/multibodySimulation/multibodySimulation";
import Section from "./section/section";
import Caption from "../caption/caption";
import LinkButton from "../linkButton/linkButton";

function Projects() {
  const [activeProject, setActiveProject] = useState(undefined);

  const projects = [
    <Project
      headerText="Personal Playground"
      duration="2019 - 2021"
      component={<Blog />}
      id="1"
      return={() => handleClick(undefined)}
    />,
    <Project
      headerText="Buzz'n'Click"
      duration="1 Month"
      component={<Buzznclick />}
      id="2"
      return={() => handleClick(undefined)}
    />,
    <Project
      headerText="Multibody Simulation"
      duration="1 Month"
      component={<MultibodySimulation />}
      id="3"
      return={() => handleClick(undefined)}
    />,
  ];

  const handleClick = (id) => {
    if (id !== undefined) {
      //switch to project
      document.getElementById("projects").classList.remove("show-projects");
      document.getElementById("projects").classList.add("hide-projects");
      setTimeout(() => {
        document.getElementById("projects").classList.remove("hide-projects");
        setActiveProject(id);
      }, 750);
    }
    if (id === undefined) {
      setActiveProject(undefined);
      document.getElementById("projects").classList.add("show-projects");
    }
  };

  const handleReturn = () => {
    document.getElementById("projects").classList.add("hide-projects");
  };

  return (
    <div id="projects" className="projects-container show-projects">
      {activeProject === undefined ? (
        <>
          <div className="projects-header">
            {" "}
            <Caption>Projects</Caption>
            <LinkButton margin to="/about" onClick={handleReturn}>
              RETURN
            </LinkButton>
          </div>

          <Section description="React">
            <ProjectThumbnail
              description="First learning experience with React and showcase of projects."
              text="Personal Playground"
              src={blogPic}
              handleClick={(id) => {
                handleClick(id);
              }}
              id="0"
            />
            <ProjectThumbnail
              description="First project done on Fiverr. Focus on functionalities."
              text="Buzz'n'click"
              src={buzznclickPic}
              handleClick={(id) => {
                handleClick(id);
              }}
              id="1"
            />
          </Section>
          <Section description="Unity">
            <ProjectThumbnail
              description="Simulation of the solar system."
              text="Multibody Simulation"
              src={paths}
              handleClick={(id) => {
                handleClick(id);
              }}
              id="2"
            />
            <ProjectThumbnail
              description="First project done on Fiverr. Focus on functionalities."
              text="Buzz'n'click"
              src={buzznclickPic}
              handleClick={(id) => {
                handleClick(id);
              }}
              id="1"
            />
          </Section>
        </>
      ) : (
        projects[parseInt(activeProject)]
      )}
    </div>
  );
}

export default Projects;
