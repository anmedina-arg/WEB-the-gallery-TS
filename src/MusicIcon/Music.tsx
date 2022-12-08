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
  
  function HandlerMusic(){
    if(active){
      audio.play()  ;     
    }else{
      audio.pause();
    }
    setActive(!active)
  }

  

  return (
   <div>    
     <button
        onClick={() => {
          audio.loop = true;
          audio.play();
        }}
      >
        Play
      </button>
      <button onClick={() => (audio.pause())}>Pause</button> 
   </div>
  );
};

export default Player;

 