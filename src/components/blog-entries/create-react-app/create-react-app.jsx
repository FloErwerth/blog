import React, { useRef } from "react";
import "./create-react-app.scss";
import EntryHeader from "../../entry-components/entry-header/entry-header";
import EntryBody from "../../entry-components/entry-body/entry-body";
import EntryList from "../../entry-components/entry-list/entry-list";
import VSCodeOpenFolder from "./pictures/VS_Code_OpenFolder.jpg";
import FolderStructure from "./pictures/FolderStructure.jpg";
import Terminal from "./pictures/Terminal.jpg";
import CreateFile from "./pictures/create-file.jpg";
import CreatedConfig from "./pictures/created-config.jpg";
import ConfigBody from "./pictures/config-body.jpg";
import ConfigBodyDone from "./pictures/config-body-done.jpg";

function CreateReactApp() {
  const packages = useRef(null);
  const configfile = useRef(null);
  const webpack = useRef(null);
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
      <>
        In this step by step guide you will learn to create an react app without
        using create-react-app. The table of content is the following:
      </>
      <EntryList>
        <EntryList.Element clickRef={packages}>
          Create the project and install npm
        </EntryList.Element>
        <EntryList.Element clickRef={configfile}>
          Install the path module and add a configuration file for webpack and
        </EntryList.Element>
        <EntryList.Element clickRef={webpack}>
          Install webpack, plugins and loaders
        </EntryList.Element>
      </EntryList>
      <EntryBody.Subtitle reference={packages}>
        Create the project and install npm
      </EntryBody.Subtitle>
      <EntryBody.Text>
        At first we choose a IDE to create our project with. My recommendation
        is{" "}
        <EntryBody.Link href="https://visualstudio.microsoft.com/de/downloads/">
          Visual Studio Code
        </EntryBody.Link>{" "}
        because of its extensions and performance. Now we can create a project
        folder and open this folder with VS code.
      </EntryBody.Text>
      <EntryBody.Image width="400" id="open-folder" src={VSCodeOpenFolder}>
        Click on <EntryBody.Highlight>file</EntryBody.Highlight> >{" "}
        <EntryBody.Highlight>Open Folder...</EntryBody.Highlight> and select the
        folder you have just created.
      </EntryBody.Image>
      <EntryBody.Image width="400" id="folder-structure" src={FolderStructure}>
        Create two folders: a{" "}
        <EntryBody.Highlight>src folder</EntryBody.Highlight> and a{" "}
        <EntryBody.Highlight>public folder</EntryBody.Highlight>. <br />
        <br /> The src folder will be the root folder for things like components
        or assets.
        <br /> The public folder will be the destination folder of the building
        process of webpack
      </EntryBody.Image>
      <>
        In order to init the project we have to install node and npm. The
        intialization of the project will give us a{" "}
        <EntryBody.Highlight>package.json</EntryBody.Highlight> file. If you
        don't have node and npm installed visit{" "}
        <EntryBody.Link href="https://nodejs.org/en/download/">
          Node.js
        </EntryBody.Link>{" "}
        and install it. When installing node you will receive npm automatically.
        Now that we have node and npm installed we can open a terminal:
      </>
      <EntryBody.Image src={Terminal} width="400" id="terminal">
        Open the terminal by clicking{" "}
        <EntryBody.Highlight>Terminal</EntryBody.Highlight> >{" "}
        <EntryBody.Highlight>New Terminal</EntryBody.Highlight>
      </EntryBody.Image>
      In the terminal window type the command{" "}
      <EntryBody.Highlight>npm init -y</EntryBody.Highlight>. <br />
      The command states the following:{" "}
      <EntryBody.Highlight>npm</EntryBody.Highlight> is the command to use npm
      as package manager. Within this package manager there are other commands
      available. <br />
      One of this commands is <EntryBody.Highlight>init</EntryBody.Highlight>,
      which initializes our project by creating a package.json file. In this
      project you have to type in metadata for this project. <br />
      By using the command <EntryBody.Highlight>-y</EntryBody.Highlight> you can
      skip this step. Feel free to leave this out and type in the metadata.
      <EntryBody.Subtitle reference={configfile}>
        Install the path module and add a configuration file for webpack
      </EntryBody.Subtitle>
      Open a terminal and type in{" "}
      <EntryBody.Highlight>npm i path</EntryBody.Highlight>. The command{" "}
      <EntryBody.Highlight>i</EntryBody.Highlight> is used to install packages
      using npm. We have now installed a module which helps us resolving paths
      in our project structure. Now we can create the config file: In the root
      of our project folder we add the file{" "}
      <EntryBody.Highlight>webpack.config.js</EntryBody.Highlight>.
      <EntryBody.Image width="400" id="create-file" src={CreateFile}>
        On the root line of your project click on the{" "}
        <EntryBody.Highlight>new file icon</EntryBody.Highlight> and rename the
        created file to{" "}
        <EntryBody.Highlight>webpack.config.js</EntryBody.Highlight>. The folder
        structure should look like this:
        <EntryBody.Image
          width="400"
          id="created-config"
          src={CreatedConfig}
        ></EntryBody.Image>
      </EntryBody.Image>
      We double click the webpack config file and process it the following way:
      At first we import the path module using{" "}
      <EntryBody.Button>
        <EntryBody.Highlight id="path">
          const path = require("path")
        </EntryBody.Highlight>
      </EntryBody.Button>{" "}
      We can now use the path module inside of our config file. All of our
      configurations are stored as a object which we are referencing with{" "}
      <EntryBody.Highlight>module.exports</EntryBody.Highlight>. This exposes
      the config body to the webpack cli.
      <EntryBody.Image
        width="400"
        id="config-body"
        src={ConfigBody}
      ></EntryBody.Image>
      We can move on to tell webpack where our entry, which is the root of our
      react application, and where to put the build files. We do so by putting{" "}
      <EntryBody.Button>
        <EntryBody.Highlight id="first">
          {`mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: { path: path.resolve(__dirname, "public"), filename: "bundle.js"},`}
        </EntryBody.Highlight>
      </EntryBody.Button>
      inside of the body. We tell webpack the follwing:<br></br> Our mode is the
      development mode using{" "}
      <EntryBody.Highlight>mode: "development"</EntryBody.Highlight>. The entry
      to our root file is the <EntryBody.Highlight>entry</EntryBody.Highlight>{" "}
      keyword in our configuration. We tell webpack, that we use the{" "}
      <EntryBody.Highlight>index.js</EntryBody.Highlight> file as our root file,
      which is inside of the{" "}
      <EntryBody.Highlight>src folder</EntryBody.Highlight>. We show webpack
      where we want webpack to store our built files by using the{" "}
      <EntryBody.Highlight>output</EntryBody.Highlight> keyword. Here we passing
      another object, because we have more then one parameter: The{" "}
      <EntryBody.Highlight>path</EntryBody.Highlight> to our destination folder
      is the <EntryBody.Highlight>public folder</EntryBody.Highlight> and the{" "}
      <EntryBody.Highlight>filename</EntryBody.Highlight> is the name of our
      built file. In our case we name it{" "}
      <EntryBody.Highlight>bundle.js</EntryBody.Highlight>. Webpack is now set
      up correctly to build our projects. This only works, if we create a
      index.js file inside of our src folder, though. The config file should
      look like this:
      <EntryBody.Image
        width="400"
        id="config-body"
        src={ConfigBodyDone}
      ></EntryBody.Image>
      We can move on and add loaders and plugins. At first we add{" "}
      <EntryBody.Highlight>loaders</EntryBody.Highlight>. Loaders enable webpack
      to load files we want to use inside of a javscript file. For example: we
      want to display an image which is a .jpg file. This we store in a constant
      which is named "picture" in our index.js file. If we build our index.js
      file this will create an error, because webpack does not know how to
      process the import. For this and many other cases the loaders come into
      place. To get loaders we have to install them using npm. In our project we
      get the loaders for image files, for SCSS files and svg files. Of course
      you can leave out loaders, if you do not need them. <br />
      At first we install a loader for{" "}
      <EntryBody.Highlight>SCSS files</EntryBody.Highlight>. SCSS is a
      preprocessor for css. Webpack is compiling the SCSS file into a CSS file,
      which is then used to style our components.
      <EntryBody.Button>
        <EntryBody.Highlight spacing id="loaders">
          npm i --save-dev sass sass-loader style-loader css-loader
        </EntryBody.Highlight>
      </EntryBody.Button>
      We are getting access to SCSS by installing{" "}
      <EntryBody.Highlight>sass sass-loader</EntryBody.Highlight>. SASS is used
      by webpack to compile the SCSS file into a CSS file and the SASS-loader is
      used to load the file in the first place. The{" "}
      <EntryBody.Highlight>style-loader</EntryBody.Highlight> is used to inject
      the css styling into the DOM of the HTML. To handle{" "}
      <EntryBody.Highlight>@import and url()</EntryBody.Highlight> usage inside
      of CSS / SCSS files we use the{" "}
      <EntryBody.Highlight>css-loader</EntryBody.Highlight>.<br />
      To use the loaders we have to enhance our webpack.config.js file.
      <EntryBody.Subtitle reference={webpack}>
        Install webpack, plugins and loaders
      </EntryBody.Subtitle>
      We can install webpack by using npm. In the terminal enter{" "}
      <EntryBody.Button>
        <EntryBody.Highlight spacing id="webpack-command">
          npm i --save-dev webpack webpack-cli webpack-dev-server
        </EntryBody.Highlight>
      </EntryBody.Button>
      The command <EntryBody.Highlight>--save-dev</EntryBody.Highlight> is
      indicating, that we using webpack as a development dependency. We use
      webpack only to build our react website. The user itself does not interact
      with webpack. The package{" "}
      <EntryBody.Highlight>webpack</EntryBody.Highlight> is the core package for
      webpack. The <EntryBody.Highlight>webpack-cli</EntryBody.Highlight> is
      responsible to create an interface between webpack and the user.{" "}
      <EntryBody.Highlight>cli</EntryBody.Highlight> stands for command line
      interface and gives the user to type in commands like build or starting
      the development server. In addition to that the cli will read the
      configuration file, which we have created on the step before, and map
      those configurations to the corresponding parameters of webpack. Last but
      not least the{" "}
      <EntryBody.Highlight>webpack-dev-server</EntryBody.Highlight> starts a
      local server to run our project on.
    </EntryBody>
  );
}

export default CreateReactApp;
