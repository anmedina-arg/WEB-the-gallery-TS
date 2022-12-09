import styled from "styled-components";
import BG02 from "../assets/experts/03-bg_experts.png";
import TR02 from "../assets/experts/04-bg_transition-02.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import texto from "../assets/experts/TXT.png";
import bgImg from "../assets/experts/nft-off_experts.png";
import bgImgHover from "../assets/experts/nft-hover_experts.png";

const StyledExpert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

type StyledBoxProp = {
  img: string;
  hover?: string;
  big?: boolean;
  marTop?: boolean;
};
const StyledBox = styled.div<StyledBoxProp>`
  background-position-y: ${({ marTop }) => (marTop ? "40%" : "30%")};
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: ${({ big }) => (big ? "40%" : "30%")};
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
  /* margin-top: ${({ marTop }) => (marTop ? "40%" : "")}; */
`;
export const Expert = () => {
  const onHoverMusic = require('../assets/music/Light-Switch-ON.wav')
  const offHoverMusic = require('../assets/music/Light-Switch-OFF.wav')
  const onAudio = new Audio(onHoverMusic)
  const offAudio = new Audio(offHoverMusic)
  return (
    <StyledBG backgroundimg={BG02}>
      <StyledExpert>
        <StyledBox  img={texto} marTop hover={texto} />
        <StyledBox onMouseEnter={() => { onAudio.play()}} onMouseLeave={() => {offAudio.play()}} img={bgImg} big hover={bgImgHover} />
      </StyledExpert>
    </StyledBG>
  );
};

export const Tr02 = () => {
  return <StyledTransition backgroundimg={TR02}></StyledTransition>;
};
