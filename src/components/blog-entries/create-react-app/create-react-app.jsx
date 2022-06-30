import React, { useRef } from "react";
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
import ConfigBodyLoaders from "./pictures/config-body-loaders.jpg";
import ConfigBodyLoadersDone from "./pictures/config-body-loaders-done.jpg";
import HtmlPlugin from "./pictures/html-plugin.jpg";
import PluginsArray from "./pictures/plugins-array.jpg";
import Template from "./pictures/template.jpg";
import PackageJSON from "./pictures/package-json.jpg";
import DevServer from "./pictures/dev-server.jpg";

function CreateReactApp() {
  const packages = useRef(null);
  const configfile = useRef(null);
  const webpack = useRef(null);
  const plugins = useRef(null);
  const top = useRef(null);
  return (
    <EntryBody reference={top}>
      <div className="create-react-app">
        <EntryHeader
          shortDescription="React Developer @ Check24"
          title="Create a react app without using create-react-app"
          date="04.06.2022"
          author="Florian Erwerth"
          time="10"
        />
      </div>
      <EntryBody.Text>
        In this step by step guide you will learn to create an react app without
        using create-react-app. The table of content is the following:
      </EntryBody.Text>
      <EntryBody.List>
        <EntryBody.ListElement reference={packages}>
          Create the project and install npm
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={configfile}>
          Install the path module and add a configuration file for webpack
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={plugins}>
          Install plugins and loaders for webpack
        </EntryBody.ListElement>
        <EntryBody.ListElement reference={webpack}>
          Install webpack, build and starting of the webpack development server
        </EntryBody.ListElement>
      </EntryBody.List>
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
      <EntryBody.Image
        width="600"
        id="open-folder"
        src={VSCodeOpenFolder}
        alt="Visual Studio Code Open Folder"
      ></EntryBody.Image>
      <EntryBody.Text>
        Click on <EntryBody.Highlight>file</EntryBody.Highlight> {"> "}
        <EntryBody.Highlight>Open Folder...</EntryBody.Highlight> and select the
        folder you have just created.
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="folder-structure"
        src={FolderStructure}
        alt="basic folder structure of the current project"
      ></EntryBody.Image>
      <EntryBody.Text>
        Create two folders: a{" "}
        <EntryBody.Highlight>src folder</EntryBody.Highlight> and a{" "}
        <EntryBody.Highlight>public folder</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        The src folder will be the root folder for things like components or
        assets.
      </EntryBody.Text>
      <EntryBody.Text>
        The public folder will be the destination folder of the building process
        of webpack In order to init the project we have to install node and npm.
        The intialization of the project will give us a{" "}
        <EntryBody.Highlight>package.json</EntryBody.Highlight> file. If you
        don't have node and npm installed visit{" "}
        <EntryBody.Link href="https://nodejs.org/en/download/">
          Node.js
        </EntryBody.Link>{" "}
        and install it.
      </EntryBody.Text>
      When installing node you will receive npm automatically. Now we can open a
      terminal:
      <EntryBody.Image
        src={Terminal}
        width="600"
        id="terminal"
        alt="Image of a terminal inside of VS code"
      ></EntryBody.Image>
      <EntryBody.Text>
        In the terminal window type the command{" "}
        <EntryBody.Highlight>npm init -y</EntryBody.Highlight>. The command
        states the following:
      </EntryBody.Text>
      <EntryBody.Text>
        <EntryBody.Highlight>npm</EntryBody.Highlight> is the command to use npm
        as package manager. Within this package manager there are other commands
        available.
      </EntryBody.Text>
      <EntryBody.Text>
        One of this commands is <EntryBody.Highlight>init</EntryBody.Highlight>,
        which initializes our project by creating a package.json file. In this
        file the metadata and other settings are stored. With the initialization
        process you have to provide some data for the project.
      </EntryBody.Text>
      <EntryBody.Text>
        By using the command <EntryBody.Highlight>-y</EntryBody.Highlight> you
        can skip this step. Feel free to leave this out and type in the
        metadata.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={configfile}>
        Install the path module and add a configuration file for webpack
      </EntryBody.Subtitle>
      <EntryBody.Text>
        {" "}
        Open a terminal and type in{" "}
        <EntryBody.Highlight>npm i path</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        The command <EntryBody.Highlight>i</EntryBody.Highlight> is used to
        install packages using npm.
      </EntryBody.Text>
      <EntryBody.Text>
        After using the command i we can specifiy the package that npm should
        install. In our case it is{" "}
        <EntryBody.Highlight>path</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        We have now installed a module which helps us resolving paths in our
        project structure. Now we can create the config file: In the root of our
        project folder we add the file{" "}
        <EntryBody.Highlight>webpack.config.js</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Image
        width="400"
        id="create-file"
        src={CreateFile}
        alt="Creating a file"
      >
        On the root line of your project click on the{" "}
        <EntryBody.Highlight>new file icon</EntryBody.Highlight> and rename the
        created file to{" "}
        <EntryBody.Highlight>webpack.config.js</EntryBody.Highlight>. The folder
        structure should look like this:
        <EntryBody.Image
          width="600"
          id="created-config"
          src={CreatedConfig}
          alt="Picture of a config file created for webpack"
        ></EntryBody.Image>
      </EntryBody.Image>
      <EntryBody.Text>
        We double click the webpack config file and process it the following
        way: At first we import the path module using{" "}
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="path">
          const path = require("path")
        </EntryBody.Highlight>
      </EntryBody.Button>{" "}
      <EntryBody.Text>
        {" "}
        We can now use the path module inside of our config file. All of our
        configurations are stored as a object which we are referencing with{" "}
        <EntryBody.Highlight>module.exports</EntryBody.Highlight>. This exposes
        the config body to the webpack cli. The configuration file should look
        like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="config-body"
        src={ConfigBody}
        alt="Picture of a configuration"
      ></EntryBody.Image>
      <EntryBody.Text>
        We tell webpack where to get the files to build and where to store them.
        The parameters <EntryBody.Highlight>entry</EntryBody.Highlight> and{" "}
        <EntryBody.Highlight>output</EntryBody.Highlight> will do this for us.
      </EntryBody.Text>
      <EntryBody.Text>
        In addition we can specifiy, that we are in the development mode, which
        enables useful things for webpack.
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="config-body"
        src={ConfigBodyDone}
        alt="Picture of a fully completed configuration"
      ></EntryBody.Image>
      <EntryBody.Text>
        We can move on and add loaders and plugins.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={plugins}>
        Install plugins and loaders for webpack
      </EntryBody.Subtitle>
      <EntryBody.Text>
        At first we add <EntryBody.Highlight>loaders</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        Loaders enable webpack to load files we want to use inside of a
        javscript file. For example: we want to display an image which is a .jpg
        file. This we store in a constant which is named "picture" in our
        index.js file. If we build our index.js file this will create an error,
        because webpack does not know how to process the import. For this and
        many other cases the loaders come into place.
      </EntryBody.Text>
      <EntryBody.Text>
        To get loaders we have to install them using npm. In our project we get
        the loaders for image files, for SCSS files and svg files. Of course you
        can leave out loaders, if you do not need them or add others. At first
        we install a loader for{" "}
        <EntryBody.Highlight>SCSS files</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        SCSS is a preprocessor for CSS. Webpack is compiling the SCSS file into
        a CSS file, which is then used to style our components. Type:
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="loaders">
          npm i --save-dev sass sass-loader style-loader css-loader
        </EntryBody.Highlight>
      </EntryBody.Button>
      <EntryBody.Text>
        {" "}
        We are getting access to SCSS by installing{" "}
        <EntryBody.Highlight>sass sass-loader</EntryBody.Highlight>. SASS is
        used by webpack to compile the SCSS file into a CSS file and the
        SASS-loader is used to load the file in the first place.{" "}
      </EntryBody.Text>
      <EntryBody.Text>
        The <EntryBody.Highlight>style-loader</EntryBody.Highlight> is used to
        inject the css styling into the DOM of the HTML.{" "}
      </EntryBody.Text>
      <EntryBody.Text>
        To handle <EntryBody.Highlight>@import and url()</EntryBody.Highlight>{" "}
        usage inside of CSS / SCSS files we use the{" "}
        <EntryBody.Highlight>css-loader</EntryBody.Highlight>.{" "}
      </EntryBody.Text>
      <EntryBody.Text>
        To use the loaders we have to enhance our webpack.config.js file. We add
        a body with the name of{" "}
        <EntryBody.Highlight>module</EntryBody.Highlight> which has a{" "}
        <EntryBody.Highlight>rules</EntryBody.Highlight> array inside of it.
        That array has a body with the loaders inside of it. This looks like the
        following:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="config-body-loaders"
        src={ConfigBodyLoaders}
        alt="Picture of a body of a loader in the webpack config file"
      ></EntryBody.Image>
      <EntryBody.Text>
        {" "}
        Now we add the loader for the style the following way: We add a{" "}
        <EntryBody.Highlight>test</EntryBody.Highlight> keyword. This has a
        regular expression as value, which is comparing the fileending of a file
        to that value. The whole entry for the body looks like this:{" "}
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="regex1">test: /\.scss$/</EntryBody.Highlight>
      </EntryBody.Button>
      <EntryBody.Text>
        If webpack has a positive test result we have to tell it what to use to
        process the file:{" "}
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="use">
          use: ['style-loader', 'css-loader', 'sass-loader']
        </EntryBody.Highlight>
      </EntryBody.Button>
      <EntryBody.Text>
        The resulting config file should look like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="400"
        id="config-body-loaders-done"
        src={ConfigBodyLoadersDone}
        alt="Done config of the webpack loaders body"
      ></EntryBody.Image>
      <EntryBody.Text>
        We can go ahead and install a HTML plugin which allows us to create a
        template for our HTML file. Every time we build our website this
        template will be used. Go ahead and type the following command in the
        terminal:
      </EntryBody.Text>
      <EntryBody.Text>
        <EntryBody.Button>
          <EntryBody.Highlight id="webpack-plugin-id">
            npm i --save-dev html-webpack-plugin
          </EntryBody.Highlight>
        </EntryBody.Button>
      </EntryBody.Text>
      <EntryBody.Text>
        We have installed the plugin and to enable the plugin we have to create
        a HTML file, which we are using as template, and update our config file.
      </EntryBody.Text>
      <EntryBody.Text>
        In our config file we will add a new constant and call it htmlPlugin.
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="const-htmlPlugin"
        src={HtmlPlugin}
        alt="Picture of an implementation of a HTML plugin"
      ></EntryBody.Image>
      <EntryBody.Text>
        Below the modules body we add an array which is called{" "}
        <EntryBody.Highlight>plugins</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        In this array we create a new object of the type HtmlPlugin and pass
        some parameters as body in it:{" "}
        <EntryBody.Highlight>title</EntryBody.Highlight> ,
        <EntryBody.Highlight>filename</EntryBody.Highlight> and{" "}
        <EntryBody.Highlight>template</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        The title is the title of the website and is shown in the tab.
      </EntryBody.Text>
      <EntryBody.Text>
        The filename is the name of the html file we creating from the template
        and storing in the public folder.
      </EntryBody.Text>
      <EntryBody.Text>
        The template parameter specifies the path to the template file we want
        webpack to use to generate our html file. The path to our template file
        will be <EntryBody.Highlight>src/template.html</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        The configuration file should look like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="const-htmlPlugin"
        src={PluginsArray}
        alt="Implementation of an array of plugins"
      ></EntryBody.Image>
      <EntryBody.Text>
        In order to successfully build our website we need to create a
        template.html file. This is a standard html file, which will be linked
        automatically with our built bundle.js file.
      </EntryBody.Text>
      <EntryBody.Text>
        In the src folder create the{" "}
        <EntryBody.Highlight>template.html</EntryBody.Highlight> file. This file
        should look like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="const-htmlPlugin"
        src={Template}
        alt="Creation of a constant"
      ></EntryBody.Image>
      <EntryBody.Text>
        In line 7 of the template.html file you can find the title. The title is{" "}
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="template-title">
          {"<%=htmlWebpackPlugin.options.title %>"}
        </EntryBody.Highlight>
      </EntryBody.Button>
      <EntryBody.Text>
        which is setting the title of the built html file with the title we are
        specifying in our configuration file.
      </EntryBody.Text>
      <EntryBody.Subtitle reference={webpack}>
        Install webpack, build and starting of the webpack development server
      </EntryBody.Subtitle>
      <EntryBody.Text>
        Before we can build our first webpage we have to install webpack and
        start a development server.
      </EntryBody.Text>
      <EntryBody.Text>
        We can install webpack, webpack-cli and the webpack development server
        with the following command in the terminal:
      </EntryBody.Text>
      <EntryBody.Button>
        <EntryBody.Highlight id="webpack-command">
          npm i --save-dev webpack webpack-cli webpack-dev-server
        </EntryBody.Highlight>
      </EntryBody.Button>
      <EntryBody.Text>
        <EntryBody.Highlight>webpack</EntryBody.Highlight> is the core package
        for webpack.
      </EntryBody.Text>
      <EntryBody.Text>
        {" "}
        The <EntryBody.Highlight>webpack-cli</EntryBody.Highlight> is
        responsible to create an interface between webpack and the user.{" "}
        <EntryBody.Highlight>cli</EntryBody.Highlight> stands for command line
        interface and gives the user to type in commands like build or starting
        the development server. In addition to that the cli will read the
        configuration file, which we have created on the step before, and map
        those configurations to the corresponding parameters of webpack.
      </EntryBody.Text>
      <EntryBody.Text>
        Last but not least the{" "}
        <EntryBody.Highlight>webpack-dev-server</EntryBody.Highlight> starts a
        local server to run our project on.
      </EntryBody.Text>
      <EntryBody.Text>
        As mentioned in the first section a package.json file was created. Here
        we can specify two crucial commands to build our project and run our
        webserver.
      </EntryBody.Text>
      <EntryBody.Text>
        In the package.json file there is a parameter which is called{" "}
        <EntryBody.Highlight>scripts</EntryBody.Highlight>.
      </EntryBody.Text>
      <EntryBody.Text>
        These scripts are commands, that can be modified to let npm do, what we
        want.
      </EntryBody.Text>
      <EntryBody.Text>
        In the package.json file we add two parameters inside of the scripts
        body. The first parameter will be{" "}
        <EntryBody.Highlight>build</EntryBody.Highlight>. This will execute the
        command <EntryBody.Highlight>webpack</EntryBody.Highlight>, which will
        trigger the build process.
      </EntryBody.Text>
      <EntryBody.Text>
        The second parameter will be{" "}
        <EntryBody.Highlight>run</EntryBody.Highlight>. This will start the
        development server.
      </EntryBody.Text>
      <EntryBody.Text>
        The whole package.json file should look like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="package-json"
        src={PackageJSON}
        alt="the package.json file"
      ></EntryBody.Image>
      <EntryBody.Text>
        We can trigger those commands by typing the following schema in the
        terminal:{" "}
        <EntryBody.Highlight>{"npm run <command>"}</EntryBody.Highlight>
      </EntryBody.Text>
      <EntryBody.Text>
        If we want to trigger the build process we type{" "}
        <EntryBody.Highlight>npm run build</EntryBody.Highlight>. With this we
        are triggering our specified parameter in the scripts body.
      </EntryBody.Text>
      <EntryBody.Text>
        Running the dev server is possible with the command{" "}
        <EntryBody.Highlight>npm run start</EntryBody.Highlight>
      </EntryBody.Text>
      <EntryBody.Text>
        We can tweak the dev server with the webpack.config.js file so that the
        dev server behaves to our liking. Somewhere in the config file add a
        body with the name <EntryBody.Highlight>devServer</EntryBody.Highlight>.
        A configuration of the dev server can look like this:
      </EntryBody.Text>
      <EntryBody.Image
        width="600"
        id="dev-server"
        src={DevServer}
        alt="configuration of a dev server"
      ></EntryBody.Image>
      <EntryBody.Text>
        When we start the dev server a new tab of the standard browser is
        opening. The server is running on the local host on a specific port. The{" "}
        <EntryBody.Highlight>standard port is 8080</EntryBody.Highlight> but I
        use the create-react-app port, which is 3000.
      </EntryBody.Text>
      <EntryBody.Text>
        <EntryBody.Highlight>static</EntryBody.Highlight> is telling the dev
        server to pull the files from this specific folder. In our case it is
        the public folder. Usually this is an array, because it is possible to
        pull the source files from different locations.
      </EntryBody.Text>
      <EntryBody.Text>
        To optimize the dev server we can add another body with the name{" "}
        <EntryBody.Highlight>optimization</EntryBody.Highlight>, which is used
        to tell the webpack dev server that we are using only one file. This is
        managable by using the keyword{" "}
        <EntryBody.Highlight>runtimeChunk</EntryBody.Highlight> and set it on
        single.
      </EntryBody.Text>
      <EntryBody.Text>
        <EntryBody.Highlight>open</EntryBody.Highlight> is used to open a
        browser tab every time we start the dev server automatically.
      </EntryBody.Text>
      <EntryBody.Text>
        One of the biggest enhancements for our dev server is the{" "}
        <EntryBody.Highlight>hot</EntryBody.Highlight> keyword. This allows the
        dev server to enable hot module replacement, which runs, updates or
        removes modules while the application is still running.
      </EntryBody.Text>
      <EntryBody.Text>
        This also enables auto reload of the application, if you update your
        application.
      </EntryBody.Text>
    </EntryBody>
  );
}

export default CreateReactApp;
