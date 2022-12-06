import styled from "styled-components";

type StyledBGProps = {
  backgroundimg?: string;
};

export const StyledBG = styled.div<StyledBGProps>`
  border: none;
  background-image: url(${({ backgroundimg }) => backgroundimg});
  background-size: 100% 100%;
  height: 100%;
  width: 100vw;
`;
