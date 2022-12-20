import styled from "styled-components";

type StyledSubTitleProps = {
  fontMin?: boolean
}

export const StyledSubTitle = styled.p<StyledSubTitleProps>`
  margin: 0;
  font-weight: 500;
  font-size: ${({ fontMin }) => (fontMin ? "1.8rem" : "2rem")};
`;
