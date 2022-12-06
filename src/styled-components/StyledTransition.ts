import styled from "styled-components";

type StyledTransitionProps = {
  backgroundimg?: string;
};

export const StyledTransition = styled.div<StyledTransitionProps>`
  border: none;
  background-image: url(${({ backgroundimg }) => backgroundimg});
  background-size: 100% 100%;
  width: 35%;
  height: 100%;
`;
