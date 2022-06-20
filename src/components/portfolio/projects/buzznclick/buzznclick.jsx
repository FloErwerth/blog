import Box from "../../box/box";
import PictureBox from "../../pictureBox/pictureBox";
import Picture from "../../picture/picture";
import login from "./pictures/Einloggen.jpg";
import player from "./pictures/Spieler.jpg";
import start from "./pictures/Startseite.jpg";
import React from "react";
function Buzznclick() {
  return (
    <div className="blog">
      <div className="blog-shift"></div>
      This project was my first project on Fiverr. The main feature of this
      project was the gameshow character. Multiple people could join a game,
      which was created and then hostet by the game master. The game master was
      able to input prepared questions and select them at the appropriate time.
      Realtime inputs are possible aswell as using a custom profile picture.
      <div style={{ marginTop: "30px" }}></div>
      <Box
        text="Fiverr"
        boxType="Link"
        href="https://www.fiverr.com/erwerth/create-an-awesome-website-for-you"
      />
      <Box
        text="HTML - Scss - JavaScript - React - Socket.io"
        boxType="Stack"
      />
      <Box
        text="Multiple ways of inputing data, login process, buzzer, sound effects"
        boxType="Features"
      />
      <PictureBox>
        <Picture
          src={login}
          description="Login screen. The user can upload a profile pic and choose a name."
          alt="Picture"
        ></Picture>
        <Picture
          src={player}
          description="Player screen. Multiple ways of interaction are possible."
          alt="Picture"
        ></Picture>
        <Picture
          src={start}
          description="Starting screen. The user can decide to open a room or be a player."
          alt="Picture"
        ></Picture>
      </PictureBox>
    </div>
  );
}

export default Buzznclick;
