import PictureFlorian from "./Foto_Florian.jpg";
import VSCodeOpenFolder from "./VS_Code_OpenFolder.jpg";
import FolderStructure from "./FolderStructure.jpg";
import Terminal from "./Terminal.jpg";
import CreateFile from "./create-file.jpg";
import CreatedConfig from "./created-config.jpg";
import ConfigBody from "./config-body.jpg";
import ConfigBodyDone from "./config-body-done.jpg";
import ConfigBodyLoaders from "./config-body-loaders.jpg";
import ConfigBodyLoadersDone from "./config-body-loaders-done.jpg";
import HtmlPlugin from "./html-plugin.jpg";
import PluginsArray from "./plugins-array.jpg";
import Template from "./template.jpg";
import PackageJSON from "./package-json.jpg";
import DevServer from "./dev-server.jpg";
import FolderStructureBabel from "./folder-structure-babel.jpg";

export const pictures = {
  PictureFlorian: PictureFlorian,
  FolderStructure: FolderStructure,
  FolderStructureBabel: FolderStructureBabel,
  VSCodeOpenFolder: VSCodeOpenFolder,
  ConfigBody: ConfigBody,
  ConfigBodyDone: ConfigBodyDone,
  ConfigBodyLoaders: ConfigBodyLoaders,
  CreatedConfig: CreatedConfig,
  ConfigBodyLoadersDone: ConfigBodyLoadersDone,
  CreateFile: CreateFile,
  Terminal: Terminal,
  Template: Template,
  DevServer: DevServer,
  HtmlPlugin: HtmlPlugin,
  PluginsArray: PluginsArray,
  PackageJSON: PackageJSON
};

export const wrapInUrl = (picture: string) => {
  return `url(${picture})`
}