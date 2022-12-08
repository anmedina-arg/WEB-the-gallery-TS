import styled from "styled-components";
import BG03 from "../assets/theapp/05-bg_theapp.png";
import TR03 from "../assets/theapp/06-bg_transition-03.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from "../assets/theapp/frame-off_theapp.png";
import bgImgHover from "../assets/theapp/frame-hover_theapp.png";
import { StyledTitle } from "../styled-components/StyledTitle";
import { StyledSubTitle } from "../styled-components/StyledSubTitle";
import { TheGallery } from "../styled-components/GalleryIcon";

type StyledBoxProp = {
  img: string;
  hover: string;
};

const StyledTheApp = styled.div`
  display: flex;
  justify-content: start;
  height: 100%;
  width: 100%;
`;
const StyledBox = styled.div<StyledBoxProp>`
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 75%;
  width: 60%;
  height: 100%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;
export const TheApp = () => {
  return (
    <StyledBG backgroundimg={BG03}>
      <StyledTheApp>
        <StyledBox img={bgImg} hover={bgImgHover} />
        <div>
          <TheGallery />
          <StyledTitle>hola soy titulo</StyledTitle>
          <StyledSubTitle>hola soy subtitle</StyledSubTitle>
        </div>
      </StyledTheApp>
    </StyledBG>
  );
};

export const Tr03 = () => {
  return <StyledTransition backgroundimg={TR03}></StyledTransition>;
};
