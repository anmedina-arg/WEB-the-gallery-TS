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
    <StyledBG backgroundimg={BG01}>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledBG>
  );
};

export const Tr01 = () => {
  return <StyledTransition backgroundimg={TR01}></StyledTransition>;
};
