import React, { useRef } from "react";
import EntryBody from "../entry-components/entry-body/entry-body";
import foto from "./Foto_Florian.jpg";
import "./about.scss";
import { navigateToLastSite } from "../../..";
function About() {
  const top = useRef(null);
  return (
    <EntryBody reference={top} hideScrollButton>
      <div style={{ display: "flex" }}>
        <h2>About the author</h2>
        <button
          className="about-return"
          onClick={() => {
            navigateToLastSite();
          }}
        >
          RETURN
        </button>
      </div>

      <div className="about-image-container">
        <div
          className="about-image"
          style={{
            backgroundImage: `url(${foto})`,
          }}
        ></div>
        <div className="about-data">
          <div>Florian Erwerth</div>
          <div>Born 16.07.1992</div>
          <div>Munich</div>
          <div>Frontend developer @ Check24</div>
        </div>
      </div>
      <EntryBody.Text>
        At first I studied in the Hochschule München. One of them was scientific
        comupting. I dropped out of the Hochschule and wanted to program from
        there on.
      </EntryBody.Text>
      <EntryBody.Text>
        I continued programming while I was thinking about what I can do with
        this new passion. I was deciding between two things:{" "}
        <ul>
          <li>teaching myself</li>
          <li>make an apprenticeship</li>
        </ul>
      </EntryBody.Text>
      <EntryBody.Text>
        I decided to do an apprenticeship, because in Germany a apprenticeship
        is worth much more than self learning skills.
      </EntryBody.Text>
      <EntryBody.Text>
        I landed started to apply for apprenticeships and landed one at the
        Deutsche Telekom. To be more precise I started working at the T-Systems
        Multimedia Solutions GmbH, which is subsidiary of the Deutsch Telekom.
      </EntryBody.Text>
      <EntryBody.Text>
        At the T-Systems I worked as Frontend Softwaredeveloper for AR/VR
        devices. We created apps to allow customers to discover new marketing
        strategies with AR/VR.
      </EntryBody.Text>
      <EntryBody.Text>
        During my apprenticeship I thought about new technologies that I could
        work with. I fell in love with the frontend development and the most
        common frontend are the browser windows when searching for something in
        the internet. I learned react.
      </EntryBody.Text>
      <EntryBody.Text>
        I successfully graduated from my apprenticeship and searched for a job
        as Frontend Developer in the area web development. At first I started a
        job, which was not suitable for me. I continued my search and landed at
        Check24.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default About;
