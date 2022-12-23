import styled from "styled-components";
import BG06 from "../assets/gallery/11-bg_my_gallery.webp";
import TR06 from "../assets/gallery/12-bg_transition-06.webp";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImgRigth from "../assets/gallery/nft-off_mygallery_der.webp";
import bgImgRigthHover from "../assets/gallery/nft-hover_mygallery_der.webp";
import bgImgLeft from "../assets/gallery/nft-off_mygallery_izq.webp";
import bgImgLeftHover from "../assets/gallery/nft-hover_mygallery_izq.webp";
import { StyledIconLigthGallery } from "../styled-components/IconLigth";
import { Styledp } from "./03-TheApp";
import { StyledTitle } from "../styled-components/StyledTitle";
import { PrimaryBtn } from "../styled-components/PrimaryBtn";

const StyledGallery = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: relative;
  left: 50%;
  max-width: 1080px;
  display: flex;
  transform: translate(-50%);
`;

type StyledBoxProp = {
  img: string;
  hover: string;
};
const StyledBox = styled.div<StyledBoxProp>`
  background-position: center;
  height: 86%;
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 35%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;
export const StyledTextContainerGallery = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  justify-content: space-evenly;
  height: 70%;
`;

export const StyledFlexGallery = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;

export const Gallery = () => {
  
  return (
    <StyledBG backgroundimg={BG06}>
      <StyledGallery>
        <StyledBox
          img={bgImgLeft}
          hover={bgImgLeftHover}
        />
        <StyledTextContainerGallery>
          <StyledFlexGallery>
            <StyledIconLigthGallery />
            <StyledTitle ligth left>reward claim</StyledTitle>
          </StyledFlexGallery>
          <Styledp cream>
            To collect your rewards you must have an NFT from TheGallery
            Distinguished Collection
          </Styledp>
          <PrimaryBtn label="coming soon" ligth />
        </StyledTextContainerGallery>
        <StyledBox
          img={bgImgRigth}
          hover={bgImgRigthHover}
        />
      </StyledGallery>
    </StyledBG>
  );
};

export const Tr06 = () => {
  return <StyledTransition backgroundimg={TR06}></StyledTransition>;
};
