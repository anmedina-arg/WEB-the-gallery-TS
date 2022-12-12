import styled from "styled-components";
import BG04 from "../assets/pathofart/07-bg_pathofart.png";
import TR04 from "../assets/pathofart/08-bg_transition-04.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from "../assets/pathofart/frame-off_pathofart.png";
import bgImg1 from "../assets/pathofart/frame-off_pathofart.png";
import bgImgHover from "../assets/pathofart/frame-hover_pathofart.png";
import bgImgHover1 from "../assets/pathofart/frame-hover_pathofart.png";

const StyledPathOfArt = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

type StyledBoxProp = {
  img: string;
  hover: string;
};
const StyledBox = styled.div<StyledBoxProp>`
  a {
    text-decoration: none;
  }
  background-size: 100% 100%;
  height: 90%;
  display: flex;
  align-items: flex-end;
  background-image: url(${({ img }) => img});
  /* background-size: contain; */
  background-repeat: no-repeat;
  width: 40%;
  /* height: 100%; */
  /* display: flex; */
  justify-content: center;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

type StyledTextPaintingProps = {
  ligth?: boolean;
};

const StyledTextPainting = styled.p<StyledTextPaintingProps>`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4rem;
  color: ${({ ligth }) => (ligth ? "#ccddff" : "#3d518c")};
  margin-bottom: 90px;
  line-height: 100%;
  width: 150px;
  display: flex;
  justify-content: center;
`;

export const PathOfArt = () => {
  const onHoverMusic = require("../assets/music/Light-Switch-ON.wav");
  const offHoverMusic = require("../assets/music/Light-Switch-OFF.wav");
  const onAudio = new Audio(onHoverMusic);
  const offAudio = new Audio(offHoverMusic);

  return (
    <StyledBG backgroundimg={BG04}>
      <StyledPathOfArt>
        <StyledBox img={bgImg} hover={bgImgHover}>
          <a href="#">
            <StyledTextPainting>ROAD MAP</StyledTextPainting>
          </a>
        </StyledBox>
        <StyledBox img={bgImg} hover={bgImgHover}>
          <a href="#">
            <StyledTextPainting ligth>WHITE PAPER</StyledTextPainting>
          </a>
        </StyledBox>
      </StyledPathOfArt>
    </StyledBG>
  );
};

export const Tr04 = () => {
  return <StyledTransition backgroundimg={TR04}></StyledTransition>;
};
