import styled, { css } from "styled-components";

type StyledTheGalleryProps = {
  nav?: boolean;
  ligth?: boolean;
};

const StyledTheGallery = styled.div<StyledTheGalleryProps>`
  border-width: 5px;
  border-style: solid;
  border-color: ${({ ligth }) => (ligth ? "#A96DFC" : "#743980")};
  text-transform: uppercase;
  color: ${({ ligth }) => (ligth ? "#A96DFC" : "#743980")};
  font-weight: 700;
  font-size: 3rem;
  line-height: 3rem;
  letter-spacing: -1px;
  width: auto;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.div {
    width: fit-content;
  }
  ${(props) =>
    props.nav &&
    css`
      border-width: 3px;
      border: 3px solid #743980;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: -1px;
      /* width: 100%; */
      /* height: 100%; */
    `}
`;

type TheGalleryProps = {
  nav?: boolean;
  ligth?: boolean;
};

export const TheGallery = ({ nav, ligth }: TheGalleryProps) => {
  return (
    <StyledTheGallery nav={nav} ligth={ligth}>
      <div>The </div>
      <div>Gall</div>
      <div>ery</div>
    </StyledTheGallery>
  );
};
