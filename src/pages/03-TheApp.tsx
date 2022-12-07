import styled from "styled-components";
import BG03 from "../assets/theapp/05-bg_theapp.png";
import TR03 from "../assets/theapp/06-bg_transition-03.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

export const TheApp = () => {
  return <StyledBG backgroundimg={BG03}></StyledBG>;
};

export const Tr03 = () => {
  return <StyledTransition backgroundimg={TR03}></StyledTransition>;
};
