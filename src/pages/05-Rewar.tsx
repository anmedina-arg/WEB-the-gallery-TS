import styled from "styled-components";
import BG05 from "../assets/reward/09-bg_rewardclaim.png";
import TR05 from "../assets/reward/10-bg_transition-05.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

export const Reward = () => {
  return <StyledBG backgroundimg={BG05}></StyledBG>;
};

export const Tr05 = () => {
  return <StyledTransition backgroundimg={TR05}></StyledTransition>;
};
