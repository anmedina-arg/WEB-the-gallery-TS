import React, { useState } from "react";
import styled from "styled-components";
// import onImgMusicHover from '../assets/music/Light-Switch-ON.wav' 
// import off from './Light-Switch-ON.wav'

const StyledPlayer = styled.div`
  border-radius: 50%;
  height: 30%;
  width: 30%;
  background-color: gray;
`;

const Player = ( ) => {

  const [active, setActive] = useState<boolean>(false)

  const onHoverMusic = require('../assets/music/Light-Switch-ON.wav')
  const offHoverMusic = require('../assets/music/Light-Switch-OFF.wav')
  const relaxingJazzMusic = require('../assets/music/RelaxedJazz.wav')
  const audio = new Audio(relaxingJazzMusic);
  


  return (
   <div>    
      {!active ? (
        <button onClick={() =>{
          relaxingJazzMusic.play();
          setActive(!active)
        }}> Play</button>
      )
        : (
          <button onClick={() =>{
            relaxingJazzMusic.pause();
          setActive(!active)
          }}
          >pause</button>
        )
    }
   </div>
  );
};


export default Player;

 