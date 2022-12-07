import styled from "styled-components";
import BG02 from "../assets/experts/03-bg_experts.png";
import TR02 from "../assets/experts/04-bg_transition-02.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

export const Expert = () => {
  return <StyledBG backgroundimg={BG02}></StyledBG>;
};

export const Tr02 = () => {
  return <StyledTransition backgroundimg={TR02}></StyledTransition>;
};
