import styled from "styled-components";
import BG03 from "../assets/theapp/05-bg_theapp.webp";
import TR03 from "../assets/theapp/06-bg_transition-03.webp";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from "../assets/theapp/frame-off_theapp.webp";
import bgImgHover from "../assets/theapp/frame-hover_theapp.webp";
import { StyledTitle } from "../styled-components/StyledTitle";
import { StyledSubTitle } from "../styled-components/StyledSubTitle";
import { StyledIconGallery } from "../styled-components/Icon";
import { PrimaryBtn } from "../styled-components/PrimaryBtn";

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
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 75%;
  width: 60%;
  height: 90%;
  top: 5vh;
  position: relative;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledFlex = styled.div`
  display: flex;
  width: 100%;
`;
type StyledIconProps = {
  big?: boolean;
};

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ big }) => (big ? "80%" : "30%")};
  height: ${({ big }) => (big ? "100%" : "")};
  margin: 0.5rem;
`;
type StyledpProps = {
  cream?: boolean;
};
export const Styledp = styled.p<StyledpProps>`
  text-align: center;
  color: ${({ cream }) => (cream ? "#FFEAE5" : "#000")};
`;
export const TheApp = () => {
  
  return (
    <StyledBG backgroundimg={BG03}>
      <StyledTheApp>
        <StyledBox img={bgImg} hover={bgImgHover} />
        <StyledTextContainer>
          <StyledFlex>
            <StyledIcon>
              <StyledIconGallery center />
            </StyledIcon>
            <div>
              <StyledTitle>is coming soon.</StyledTitle>
              <StyledSubTitle>SHARE YOUR NFTs</StyledSubTitle>
              <StyledSubTitle>WITH THE WORLD</StyledSubTitle>
            </div>
          </StyledFlex>
          <Styledp>
            Keep up to date with our news and find out when is the Grand
            Opening!
          </Styledp>
          <PrimaryBtn label="learn more" />
        </StyledTextContainer>
      </StyledTheApp>
    </StyledBG>
  );
};

export const Tr03 = () => {
  return <StyledTransition backgroundimg={TR03}></StyledTransition>;
};
