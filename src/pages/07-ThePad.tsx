import styled from "styled-components";
import BG07 from "../assets/pad/13-bg_thepad.png";
import { StyledBG } from "../styled-components/StyledBG";
import bgImg from "../assets/pad/nft-off_thepad-B.png";
import bgImgHover from "../assets/pad/nft-hover_thepad-B.png";

const StyledThePad = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;
type StyledBoxProp = {
  img: string;
  hover: string;
};

const StyledBox = styled.div<StyledBoxProp>`
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  align-self: center;
  width: 50%;
  display: flex;
  height: 100%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const ThePad = () => {
  const onHoverMusic = require('../assets/music/Light-Switch-ON.wav')
  const offHoverMusic = require('../assets/music/Light-Switch-OFF.wav')
  const onAudio = new Audio(onHoverMusic)
  const offAudio = new Audio(offHoverMusic)
  return (
    <StyledBG backgroundimg={BG07}>
      <StyledThePad>
        <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} img={bgImg} hover={bgImgHover} />
      </StyledThePad>
    </StyledBG>
  );
};
