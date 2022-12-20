import styled from "styled-components";
import { Styledp } from "../pages/03-TheApp";
import { StyledIconGallery } from "./Icon";
import { StyledSubTitle } from "./StyledSubTitle";
import { StyledTitle } from "./StyledTitle";


const StyledContainer = styled.div`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledPopUp = styled.div`
  background-color: #fff;
  width: 25rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
`

const StyledMainText = styled.div`
  display: flex;
`
const StyledIconPopUp = styled.div`
  width: 6rem;
  scale: 1/1;
  margin-left: 0.75rem;
`
export const PopUp = () => {
  return (
    <StyledContainer>
      <StyledPopUp>
        <StyledMainText>
          <div>
            <StyledTitle mainColor>welcome to</StyledTitle>
            <StyledSubTitle fontMin>SHARE YOUR NFTs</StyledSubTitle>
            <StyledSubTitle fontMin>WITH THE WORLD.</StyledSubTitle>
          </div>
          <StyledIconPopUp>
            <StyledIconGallery center/>
          </StyledIconPopUp>
        </StyledMainText>
        <Styledp>Scroll up and down to visit TheGallery.</Styledp>
        {/* <Styledp>(click to start)</Styledp> */}
      </StyledPopUp>
    </StyledContainer>
  )
}