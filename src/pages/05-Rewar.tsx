import styled from "styled-components";
import BG05 from "../assets/reward/09-bg_rewardclaim.png";
import TR05 from "../assets/reward/10-bg_transition-05.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from "../assets/reward/nft-off_rewardclaim.png";
import bgImgHover from "../assets/reward/nft-hover_rewardclaim.png";
import { StyledFlex, StyledIcon, Styledp } from "./03-TheApp";
import { StyledTitle } from "../styled-components/StyledTitle";
import { PrimaryBtn } from "../styled-components/PrimaryBtn";
import { StyledIconLigthGallery } from "../styled-components/IconLigth";

type StyledBoxProp = {
  img: string;
  hover: string;
};

const StyledReward = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  position: relative;
  left: 50%;
  max-width: 1080px;
  display: flex;
  transform: translate(-50%);
`;

const StyledBox = styled.div<StyledBoxProp>`
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 60%;
  height: 100%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const StyledTextContainerReward = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  justify-content: space-evenly;
  height: 70%;
`;

const StyledFlexReward = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
`;

export const Reward = () => {
  return (
    <StyledBG backgroundimg={BG05}>
      <StyledReward>
        <StyledTextContainerReward>
          <StyledFlexReward>
            <StyledIconLigthGallery />
            <StyledTitle ligth>reward claim</StyledTitle>
          </StyledFlexReward>
          <Styledp cream>
            To collect your rewards you must have an NFT from TheGallery
            Distinguished Collection
          </Styledp>
          <PrimaryBtn label="comming soon" ligth />
        </StyledTextContainerReward>
        <StyledBox img={bgImg} hover={bgImgHover} />
      </StyledReward>
    </StyledBG>
  );
};

export const Tr05 = () => {
  return <StyledTransition backgroundimg={TR05}></StyledTransition>;
};
