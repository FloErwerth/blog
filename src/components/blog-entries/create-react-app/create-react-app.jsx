import React, { useRef } from "react";
import "./create-react-app.scss";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryList from "../../entry-components/entry-list/entry-list";
function CreateReactApp() {
  const packages = useRef(null);
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
      <EntryList>
        <EntryList.Element clickRef={packages}>
          Create the project and install necessary packages and modules
        </EntryList.Element>
      </EntryList>
      <EntryBody.Subtitle ref={packages}>
        Create the project and install necessary packages and modules
      </EntryBody.Subtitle>
      <EntryBody.Text>
        The obvious first step is to create a project and create the folder
        structure.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default CreateReactApp;
