import styled from "styled-components";
import BG01 from "../assets/home/01-bg_home.png";
import TR01 from "../assets/home/02-bg_transition-01.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImgLeft from "../assets/home/frame-off_home-izq.png";
import bgImgLeftHover from "../assets/home/frame-hover_home-izq.png";
import bgImgMain from "../assets/home/frame-off_home-main.png";
import bgImgMainHover from "../assets/home/frame-hover_home-main.png";
import bgImgRigthtHover from "../assets/home/frame-hover_home-der.png";
import bgImgRight from "../assets/home/frame-off_home-der.png";

const StyledHome = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
type StyledBoxProp = {
  img: string;
  hover: string;
  big?: boolean;
};

const StyledBox = styled.div<StyledBoxProp>`
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
  width: ${({ big }) => (big ? "30%" : "20%")};
  height: 100%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const Home = () => {
  const onHoverMusic = require('../assets/music/Light-Switch-ON.wav')
  const offHoverMusic = require('../assets/music/Light-Switch-OFF.wav')
  const onAudio = new Audio(onHoverMusic)
  const offAudio = new Audio(offHoverMusic)
  return (
    <StyledBG backgroundimg={BG01}>
      <StyledHome>
        <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} hover={bgImgLeftHover} img={bgImgLeft} />
        <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} hover={bgImgMainHover} big img={bgImgMain} />
        <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} hover={bgImgRigthtHover} img={bgImgRight} />
      </StyledHome>
    </StyledBG>
  );
};

export const Tr01 = () => {
  return <StyledTransition backgroundimg={TR01}></StyledTransition>;
};
