import styled from "styled-components";

type StyledHeaderProps = {
  ligth?: boolean;
};

export const StyledTitle = styled.p<StyledHeaderProps>`
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: ${({ ligth }) => (ligth ? "#BECEEC" : "#000000")};
`;
