import styled from "styled-components";
import BG07 from "../assets/pad/13-bg_thepad.png";
import { StyledBG } from "../styled-components/StyledBG";
import bgImg from '../assets/pad/nft-off_thepad.png'
import bgImgHover from '../assets/pad/nft-hover_thepad-B.png'

const StyledThePad = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
`;
type StyledBoxProp = {
  img : string;
  hover: string;
}

const StyledBox = styled.div<StyledBoxProp>`
  background-image:url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  height: 100%;
  &:hover{    
    background-image: url(${({hover}) => hover});
  };

`;

export const ThePad = () => {
    return (
      <StyledBG backgroundimg={BG07}>
        <StyledThePad>
          <StyledBox img={bgImg} hover={bgImgHover}/>
        </StyledThePad>
      </StyledBG>
    )
};
