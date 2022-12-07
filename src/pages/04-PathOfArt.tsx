import styled from "styled-components";
import BG04 from "../assets/pathofart/07-bg_pathofart.png";
import TR04 from "../assets/pathofart/08-bg_transition-04.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from '../assets/pathofart/frame-off_pathofart.png'
import bgImg1 from '../assets/pathofart/frame-off_pathofart.png'
import bgImgHover from '../assets/pathofart/frame-hover_pathofart.png'
import bgImgHover1 from '../assets/pathofart/frame-hover_pathofart.png'

const StyledPathOfArt = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;  
`;

type StyledBoxProp = {
  img : string;
  hover: string;
}
const StyledBox = styled.div<StyledBoxProp>`
  a{
    text-decoration: none;        
  }
  p{  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-weight: bold;
  }
  
  background-image: url(${({img}) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  height: 100%;
  &:hover{    
    background-image: url(${({hover}) => hover});
  };

`;

export const PathOfArt = () => {
  return (
    <StyledBG backgroundimg={BG04}>
      <StyledPathOfArt>
        <StyledBox img={bgImg} hover={bgImgHover}>
          <a href="#"> 
          <p>ROAD</p>
          <p>MAP</p>
          </a>
        </StyledBox>
        <StyledBox img={bgImg} hover={bgImgHover}>
        <a href="#"> 
          <p>WHITE</p>
          <p>PAPER</p>
          </a>
        </StyledBox>          
      </StyledPathOfArt>
    </StyledBG>
  )
};

export const Tr04 = () => {
  return <StyledTransition backgroundimg={TR04}></StyledTransition>;
};
