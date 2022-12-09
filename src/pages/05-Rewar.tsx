import styled from "styled-components";
import BG05 from "../assets/reward/09-bg_rewardclaim.png";
import TR05 from "../assets/reward/10-bg_transition-05.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from '../assets/reward/nft-off_rewardclaim.png'
import bgImgHover from '../assets/reward/nft-hover_rewardclaim.png'

type StyledBoxProp = {
  img : string;
  hover: string;  
}

const StyledReward = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const StyledBox = styled.div<StyledBoxProp>`
  background-image:url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 55%;
  height: 100%;
  &:hover{    
    background-image: url(${({hover}) => hover});
  };

`;

export const Reward = () => {
  const onHoverMusic = require('../assets/music/Light-Switch-ON.wav')
  const offHoverMusic = require('../assets/music/Light-Switch-OFF.wav')
  const onAudio = new Audio(onHoverMusic)
  const offAudio = new Audio(offHoverMusic)
  
  return (
    <StyledBG backgroundimg={BG05}>
      <StyledReward>
      <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} img={bgImg} hover={bgImgHover}/>
      </StyledReward>
    </StyledBG>

  );
};

export const Tr05 = () => {
  return <StyledTransition backgroundimg={TR05}></StyledTransition>;
};
