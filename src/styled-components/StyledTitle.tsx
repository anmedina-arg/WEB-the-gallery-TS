import styled from "styled-components";

type StyledHeaderProps = {
  ligth?: boolean;
};

export const StyledTitle = styled.p<StyledHeaderProps>`
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;
  font-size: 3rem;
  color: ${({ ligth }) => (ligth ? "#BECEEC" : "#000000")};
`;
