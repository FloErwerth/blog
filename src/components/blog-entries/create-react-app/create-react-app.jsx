import React, { useRef } from "react";
import "./create-react-app.scss";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryList from "../../entry-components/entry-list/entry-list";
import VSCodeOpenFolder from "./pictures/VS_Code_OpenFolder.jpg";

function CreateReactApp() {
  const packages = useRef(null);
  return (
    <EntryBody>
      <div className="create-react-app">
        <EntryHeader
          title="Create a react app without using create-react-app"
          date="04.06.2022"
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
        At first we choose a IDE to create our project with. My recommendation
        is{" "}
        <EntryBody.Link
          href="https://visualstudio.microsoft.com/de/downloads/"
          target="_blank"
        >
          Visual Studio Code
        </EntryBody.Link>{" "}
        because of its extensions and performance. Now we can create a project
        folder and open this folder with VS code.
      </EntryBody.Text>
      <EntryBody.Image id="open-folder" src={VSCodeOpenFolder} placement="left">
        Click on file > Open Folder... and select the folder you have just
        created.
      </EntryBody.Image>
      <EnteyBody.Image
        id="folder-structure"
        src={FolderStructure}
        placement="right"
      ></EnteyBody.Image>
    </EntryBody>
  );
}

export default CreateReactApp;
