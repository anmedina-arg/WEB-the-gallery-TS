import styled from "styled-components";
import BG07 from "../assets/pad/13-bg_thepad-v2.png";
import { StyledBG } from "../styled-components/StyledBG";
import bgImg from "../assets/pad/nft-off_thepad.png";
import bgImgHover from "../assets/pad/nft-hover_thepad.png";
import { StyledTitle } from "../styled-components/StyledTitle";
import { StyledIconLigthGallery } from "../styled-components/IconLigth";
import { PrimaryBtn } from "../styled-components/PrimaryBtn";
import { Styledp } from "./03-TheApp";

const StyledThePad = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`;
type StyledBoxProp = {
  img: string;
  hover: string;
};

const StyledBox = styled.div<StyledBoxProp>`
  width: 60%;
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  height: 90%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const StyledTextContainerPad = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  justify-content: space-evenly;
  height: 70%;
`;

export const StyledFlexPad = styled.div`
  display: flex;
  width: 50%;
  height: 25%;
  .title {
    display: flex;
    flex-direction: column;
  }
`;

export const ThePad = () => {
  return (
    <StyledBG backgroundimg={BG07}>
      <StyledThePad>
        <StyledBox
          img={bgImg}
          hover={bgImgHover}
        />
        <StyledTextContainerPad>
          <StyledFlexPad>
            <StyledIconLigthGallery />
            <div className="title">
              <StyledTitle ligth left>the</StyledTitle>
              <StyledTitle ligth left>pad</StyledTitle>
            </div>
          </StyledFlexPad>
          <Styledp cream>
            Buy NFTs at 15% off their mint price, only on ThePad
          </Styledp>
          <PrimaryBtn label="coming soon" ligth />
        </StyledTextContainerPad>
      </StyledThePad>
    </StyledBG>
  );
};
