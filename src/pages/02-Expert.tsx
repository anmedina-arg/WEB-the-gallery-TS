import styled from "styled-components";

const StyledSlide3 = styled.div`
  background-color: red;
  color: #fff;
  height: 100%;
  width: 100vw;
  border: 10px solid black;
  box-sizing: border-box;
`;

export const StyledSlide4 = styled.div`
  background-color: purple;
  color: #fff;
  width: 40%;
  height: 100%;
`;

export const Expert = () => {
  return (
    <div>
      <StyledSlide3 />
      <StyledSlide4 />
    </div>
  );
};
