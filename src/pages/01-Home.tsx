import styled from "styled-components";
import BG01 from "../assets/home/01-bg_home.png";
import TR01 from "../assets/home/02-bg_transition-01.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";

const StyledHome = styled.div`
  display: flex;
  height: 100%;
`;

export const Home = () => {
  return (
    <StyledHome>
      <StyledBG backgroundimg={BG01}></StyledBG>
      {/* <StyledTransition backgroundimg={TR01}></StyledTransition> */}
    </StyledHome>
  );
};
