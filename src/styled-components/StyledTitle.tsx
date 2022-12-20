import styled from "styled-components";

type StyledHeaderProps = {
  ligth?: boolean;
  mainColor?: boolean;
  fontMin?: boolean;
  left?: boolean
};

export const StyledTitle = styled.p<StyledHeaderProps>`
  padding-left: ${({left}) => (left ? '0.75rem' : '')};
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: ${({ ligth, mainColor }) => (ligth ? "#BECEEC" : mainColor ? "#743980": "#000000")};
`;
