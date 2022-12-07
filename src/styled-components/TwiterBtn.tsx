// import "./signin.css";
import TWITTER from "../assets/white_background.png";
import TWITTER_HOVER from "../assets/ligth_blue_background.png";

import styled from "styled-components";

const StyledSignIn = styled.div`
  margin: 0.25rem;
  background-image: url(${TWITTER});
  background-position: left;
  background-size: 20%;
  background-repeat: no-repeat;
  background-position-x: 10%;
  box-sizing: border-box;
  border: 3px solid #00a2f4;
  background-color: #00a2f4;
  display: flex;
  color: #fff;
  border-radius: 40px;
  width: 13rem;
  height: 3rem;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  user-select: none;

  &:hover {
    border: 3px solid #00a2f4;
    background-color: #fff;
    color: #00a2f4;
    background-image: url(${TWITTER_HOVER});
  }

  .text_signin {
    text-transform: uppercase;
    font-size: 130%;
    font-weight: 700;
    margin: 0;
    padding-left: 25%;
  }
`;

export const Signin = () => {
  return (
    <StyledSignIn>
      <p className="text_signin">sign in</p>
    </StyledSignIn>
  );
};
