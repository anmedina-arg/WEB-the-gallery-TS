import styled from "styled-components";
import BG04 from "../assets/pathofart/07-bg_pathofart.png";
import TR04 from "../assets/pathofart/08-bg_transition-04.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

export const PathOfArt = () => {
  return <StyledBG backgroundimg={BG04}></StyledBG>;
};

export const Tr04 = () => {
  return <StyledTransition backgroundimg={TR04}></StyledTransition>;
};
