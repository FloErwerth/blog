import "./style/main.scss";
import Entry from "../entry/entry";
import LinkButton from "../linkButton/linkButton";
import Bio from "../bio/bio";
import React, { useEffect } from "react";
import Foto_Florian from "../../blog-card/Foto_Florian.jpg";

function Main() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleClick = () => {
    const main = document.getElementById("portfolio-main").classList;
    main.add("hide-portfolio-main");
  };

  return (
    <>
      <div
        id="portfolio-main"
        className="portfolio-main-container show-portfolio-main"
      >
        <div className="portfolio-main-cheering">
          Hello, I am a Web Frontend Softwaredeveloper working for Check24.
        </div>
        <div className="portfolio-main-intro">
          <div className="portfolio-main-intro-picture-wrapper">
            <div
              style={{
                backgroundImage: `url(${Foto_Florian})`,
                backgroundSize: "200% 240%",
                backgroundPosition: "-3px -25px",
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            ></div>
          </div>
          <div className="portfolio-main-intro-name">
            Florian Erwerth
            <div className="portfolio-main-intro-name-description">
              Frontend Software Developer (React / Unity)
            </div>
          </div>
        </div>
        <Entry
          caption="Career"
          text="Florian is a software developer who started his career in the Deutsche Telekom as a Frontend Developer for Augmented Reality and Virtual Reality devices working with Unity. As he wanted to discover other technologies, he decided to try out web technologies with React and created his very first website with it. Due to his effort he was able to get a job working with React. In addition to his regular job he is realizing jobs on Fiverr."
        />
        <LinkButton onClick={handleClick} to="/projects">
          Projects
        </LinkButton>
        <Bio />
      </div>
    </>
  );
}

export default Main;
