import React, { useState } from "react";
import styled from "styled-components";
import BTN_MUSIC from "../assets/Gallery_btn-musicOn-off.png";
// import onImgMusicHover from '../assets/music/Light-Switch-ON.wav'
// import off from './Light-Switch-ON.wav'

const StyledPlayer = styled.div`
  background-image: url(${BTN_MUSIC});
  background-size: contain;
  cursor: pointer;
  height: 30px;
  width: 30px;
`;

const StyledPosition = styled.div`
  position: fixed;
  top: 12vh;
`;

const Player = () => {
  const [active, setActive] = useState<boolean>(false);

  const onHoverMusic = require("../assets/music/Light-Switch-ON.wav");
  const offHoverMusic = require("../assets/music/Light-Switch-OFF.wav");
  const relaxingJazzMusic = require("../assets/music/RelaxedJazz.wav");
  const audio = new Audio(relaxingJazzMusic);

  return (
    <StyledPosition>
      <StyledPlayer
        onClick={() => {
          if (active) {
            console.log("entre al true");
            audio.play();
            setActive(false);
            console.log(active);
          } else {
            console.log("entre al false");
            // audio.muted;
            setActive(true);
          }
        }}
      />
      {/* {!active ? (
        <button
          onClick={() => {
            audio.play();
            setActive(!active);
          }}
        >
          {" "}
          Play
        </button>
      ) : (
        <button
          onClick={() => {
            audio.pause();
            setActive(!active);
          }}
        >
          pause
        </button>
      )} */}
    </StyledPosition>
  );
};

export default Player;
