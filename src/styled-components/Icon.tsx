import styled from "styled-components";
import LOGO from "../assets/LOGO.png";

type StyledIconGalleyProps = {
  center?: boolean;
};

export const StyledIconGallery = styled.div<StyledIconGalleyProps>`
  background-position: ${({ center }) => (center ? "center" : "")};
  background-image: url(${LOGO});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;
