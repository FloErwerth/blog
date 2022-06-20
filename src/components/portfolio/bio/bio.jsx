import Entry from "../entry/entry";
import "./bio.scss";
import React from "react";
function Bio() {
  return (
    <>
      <Entry caption="Bio" />
      <div className="bio">
        <ul className="bio-list">
          <div className="bio-list-item">
            <div className="bio-list-year">16.07.1992</div> Born
          </div>
          <div className="bio-list-item">
            <div className="bio-list-year">01.09.2019 - 19.01.2022</div>
            <div className="bio-list-text">
              Apprenticeship at the T-Systems Multimedia Solutions GmbH
              <div className="bio-list-ul">
                <li>Realizing projects in a small teams using agile methods</li>
                <li>Creating proof of concepts</li>
                <li>Creating toolkits for internal usage</li>
              </div>
            </div>
          </div>
          <div className="bio-list-item">
            <div className="bio-list-year">01.02.2022 - 15.07.2022</div>
            <div className="bio-list-text">
              Web Frontend Developer at the Industrieanlagen
              Betriebsgesellschaft mbH
              <div className="bio-list-ul">
                <li>Creating browser websites using agile methods</li>
                <li>Working with service oriented architecture</li>
                <li>Creating internal proof of concepts with larger teams</li>
              </div>
            </div>
          </div>
          <div className="bio-list-item">
            <div className="bio-list-year">since 15.07.2022</div>
            <div className="bio-list-text">
              Junior Frontend Developer
              <div className="bio-list-ul">
                <li>
                  Extending the existing website of Check24 - KFZ-Versicherungen
                </li>
                <li>Working in a small, agile team</li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Bio;
