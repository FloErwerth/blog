import React from "react";
import "./create-react-app.scss";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryBody from "../../entry-components/entry-body/entry-body";
function CreateReactApp() {
  return (
    <EntryBody>
      <div className="create-react-app">
        <EntryHeader
          title="Create a react app without using create-react-app"
          date="03.06.2022"
          author="Florian Erwerth"
          time="10"
        />
      </div>
      <p>
        In this step by step guide you will learn to create an react app without
        using create-react-app shipped with react. The table of content is the
        following:
      </p>
      <ul>
        <li>Installing the necessary packages and modules</li>
        <li>Configure the loaders and plugins for webpack</li>
        <li>Usage of webpack</li>
      </ul>
      <h4>Installing the necessary packages and modules</h4>
    </EntryBody>
  );
}

export default CreateReactApp;
