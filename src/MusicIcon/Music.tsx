import React, { useRef, useState } from "react";
import styled from "styled-components";
import BTN_MUSIC_ON from "../assets/Gallery_btn-musicOn-off.png";
import BTN_MUSIC_ON_HOVER from "../assets/Gallery_btn-musicOn-hover.png";
import BTN_MUSIC_OFF from "../assets/Gallery_btn-musicOff-off.png";
import BTN_MUSIC_OFF_HOVER from "../assets/Gallery_btn-musicOff-hover.png";

const StyledPosition = styled.div`
  position: fixed;
  top: 12vh;
  left: 1vw;
`;

type StyledPlayerOnProps = {
  hover?: boolean
}
const StyledPlayerOn = styled.div<StyledPlayerOnProps>`
  background-image: url(${BTN_MUSIC_ON});
  background-size: contain;
  cursor: pointer;
  height: 45px;
  width: 45px;
  &:hover{
    background-image: url(${BTN_MUSIC_ON_HOVER});
  }
  `;


type StyledPlayerOffProps = {
  hover?: boolean
}
const StyledPlayerOff = styled.div<StyledPlayerOffProps>`
  background-image: url(${BTN_MUSIC_OFF});
  background-size: contain;
  cursor: pointer;
  height: 45px;
  width: 45px;
  &:hover{
    background-image: url(${BTN_MUSIC_OFF_HOVER});
  }
`;

const relaxingJazzMusic = require("../assets/music/RelaxedJazz.wav");

const Player = () => {
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
      {playing ? 
        (<StyledPlayerOn onClick={playing ? pause : play}  />)
        :
        (<StyledPlayerOff onClick={playing ? pause : play} />)
      
    }
    </StyledPosition>
  );
};

export default Player;
