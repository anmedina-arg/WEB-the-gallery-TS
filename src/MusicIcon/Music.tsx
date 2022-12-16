import React, { useRef, useState } from "react";
import styled from "styled-components";
import BTN_MUSIC from "../assets/Gallery_btn-musicOn-off.png";

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
  const relaxingJazzMusic = require("../assets/music/RelaxedJazz.wav");
  const [playing, setPlaying] = useState(false);

  const audioRef = useRef(new Audio(relaxingJazzMusic));
  const play = () => {
    setPlaying(true);
    audioRef.current.play();
  };

  const pause = () => {
    setPlaying(false);
    audioRef.current.pause();
  };
  return (
    <StyledPosition>
      <StyledPlayer onClick={playing ? pause : play} className="music" />;
    </StyledPosition>
  );
};

export default Player;
