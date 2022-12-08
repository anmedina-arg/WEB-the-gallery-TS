import styled from "styled-components";
import BG06 from "../assets/gallery/11-bg_my_gallery.png";
import TR06 from "../assets/gallery/12-bg_transition-06b.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImgRigth from "../assets/gallery/nft-off_mygallery_der.png";
import bgImgRigthHover from "../assets/gallery/nft-hover_mygallery_der.png";
import bgImgLeft from "../assets/gallery/nft-off_mygallery_izq.png";
import bgImgLeftHover from "../assets/gallery/nft-hover_mygallery_izq.png";

const StyledGallery = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
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
  /* height: 100%; */
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const Gallery = () => {
  return (
    <StyledBG backgroundimg={BG06}>
      <StyledGallery>
        <StyledBox img={bgImgLeft} hover={bgImgLeftHover} />
        <StyledBox img={bgImgRigth} hover={bgImgRigthHover} />
      </StyledGallery>
    </StyledBG>
  );
};

export const Tr06 = () => {
  return <StyledTransition backgroundimg={TR06}></StyledTransition>;
};
