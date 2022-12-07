import styled from "styled-components";
import BG06 from "../assets/gallery/11-bg_my_gallery.png";
import TR06 from "../assets/gallery/12-bg_transition-06b.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

export const Gallery = () => {
  return <StyledBG backgroundimg={BG06}></StyledBG>;
};

export const Tr06 = () => {
  return <StyledTransition backgroundimg={TR06}></StyledTransition>;
};
