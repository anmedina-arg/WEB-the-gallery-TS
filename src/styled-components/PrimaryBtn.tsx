import styled from "styled-components";

type StyledPrimaryBtnProps = {
  ligth?: boolean;
};

const StyledPrimaryBtn = styled.div<StyledPrimaryBtnProps>`
  box-sizing: border-box;
  text-transform: uppercase;
  background-color: transparent;
  color: ${({ ligth }) => (ligth ? "#A96DFC" : "#743980")};
  border: 3px solid;
  border-color: ${({ ligth }) => (ligth ? "#A96DFC" : "#743980")};
  border-radius: 40px;
  height: 40px;
  width: 184px;
  font-weight: 700;
  font-size: 130%;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #fff;
    background-color: ${({ ligth }) => (ligth ? "#A96DFC" : "#743980")};
  }
`;

type PrimaryBtnProps = {
  label: string;
  ligth?: boolean;
};
export const PrimaryBtn = ({ label, ligth }: PrimaryBtnProps) => {
  return <StyledPrimaryBtn ligth={ligth}>{label}</StyledPrimaryBtn>;
};
