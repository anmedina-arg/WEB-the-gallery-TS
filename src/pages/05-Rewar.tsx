import styled from "styled-components";
import BG05 from "../assets/reward/09-bg_rewardclaim.png";
import TR05 from "../assets/reward/10-bg_transition-05.png";
import { StyledBG } from "../styled-components/StyledBG";
import { StyledTransition } from "../styled-components/StyledTransition";
import bgImg from "../assets/reward/nft-off_rewardclaim.png";
import bgImgHover from "../assets/reward/nft-hover_rewardclaim.png";
import { StyledIconGallery } from "../styled-components/Icon";
import { StyledFlex, StyledIcon, StyledTextContainer } from "./03-TheApp";
import { StyledTitle } from "../styled-components/StyledTitle";
import { PrimaryBtn } from "../styled-components/PrimaryBtn";

type StyledBoxProp = {
  img: string;
  hover: string;
};

const StyledReward = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const StyledBox = styled.div<StyledBoxProp>`
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 55%;
  height: 100%;
  &:hover {
    background-image: url(${({ hover }) => hover});
  }
`;

export const Reward = () => {
  return (
    <StyledBG backgroundimg={BG05}>
      <StyledReward>
        <StyledTextContainer>
          <StyledFlex>
            <StyledIcon>
              <StyledIconGallery />
            </StyledIcon>
            <StyledTitle>reward claim</StyledTitle>
          </StyledFlex>
          <p>
            To collect your rewards you must have an NFT from TheGallery
            Distinguished Collection
          </p>
          <PrimaryBtn label="comming soon" ligth />
        </StyledTextContainer>
        <StyledBox img={bgImg} hover={bgImgHover} />
      </StyledReward>
    </StyledBG>
  );
};

export const Tr05 = () => {
  return <StyledTransition backgroundimg={TR05}></StyledTransition>;
};
