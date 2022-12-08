import styled from "styled-components";
import LOGO from "../assets/LOGO-LIGTH.png";

type StyledIconGalleyProps = {
  center?: boolean;
};

export const StyledIconLigthGallery = styled.div<StyledIconGalleyProps>`
  background-position: ${({ center }) => (center ? "center" : "")};
  background-image: url(${LOGO});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  aspect-ratio: 1/1;
  height: 100%;
`;
