import Box from "../../box/box";
import Picture from "../../picture/picture";
import Video from "../../video/Video";
import PictureBox from "../../pictureBox/pictureBox";
import paths from "./PlanetaryPaths.png";
import OrbitSimulation from "./OrbitSimulation.mp4";
import OrbitPath from "./OrbitPath1.mp4";
import React from "react";

function MultibodySimulation() {
  return (
    <div className="blog">
      <div className="blog-shift"></div>
      One of Florian private projects in Unity. The simulation of the solar
      system was realized using the euler integration and multithreading on the
      GPU using Unitys compute shader. Additionally there is a path preview
      allowing to forecast the paths at a given velocity.
      <div style={{ marginTop: "30px" }}></div>
      <Box text="Unity" boxType="Stack" />
      <PictureBox>
        <Picture
          src={paths}
          description="The result of a multibody path prognosis."
          alt="Picture"
        ></Picture>
        <Video
          src={OrbitSimulation}
          type={"mp4"}
          description="Realtime simulation of a multibody system."
          alt="Picture"
        ></Video>
        <Video
          src={OrbitPath}
          type={"mp4"}
          description="Path prognosis for a sun with one planet."
          alt="Picture"
        ></Video>
      </PictureBox>
    </div>
  );
}

export default MultibodySimulation;
