import styled from "styled-components";
import BG01 from "../assets/home/01-bg_home.webp";
import TR01 from "../assets/home/02-bg_transition-01.webp";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImgLeft from "../assets/home/frame-off_home-izq.webp";
import bgImgLeftHover from "../assets/home/frame-hover_home-izq.webp";
import bgImgMain from "../assets/home/frame-off_home-main.webp";
import bgImgMainHover from "../assets/home/frame-hover_home-main.webp";
import bgImgRigthtHover from "../assets/home/frame-hover_home-der.webp";
import bgImgRight from "../assets/home/frame-off_home-der.webp";

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
  return (
    <StyledBG backgroundimg={BG01}>
      <StyledHome>
        <StyledBox
          hover={bgImgLeftHover}
          img={bgImgLeft}
        />
        <StyledBox
          hover={bgImgMainHover}
          big
          img={bgImgMain}
        />
        <StyledBox
          hover={bgImgRigthtHover}
          img={bgImgRight}
        />
      </StyledHome>
    </StyledBG>
  );
};

export const Tr01 = () => {
  return <StyledTransition backgroundimg={TR01}></StyledTransition>;
};
