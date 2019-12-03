import React from "react";
import styled from "styled-components";

import theory from "./img/theory.jpeg";
import codesandbox from "./img/codesangbox.png";
import practice from "./img/practice.png";
import comment from "./img/comment.png";

class Topic extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledHeader>Beginner Lesson</StyledHeader>
        <StyledButton>
          <CoursesLogo src={theory} />
          Theory
        </StyledButton>
        <StyledButton>
          <CoursesLogo src={codesandbox} />
          EXAMPLES
        </StyledButton>
        <StyledButton>
          <CoursesLogo src={practice} />
          HOMEWORKS
        </StyledButton>
        <StyledButton>
          <CoursesLogo src={comment} />
          COMMENTS
        </StyledButton>
      </StyledDiv>
    );
  }
}

export default Topic;

const StyledDiv = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled.button`
  flex-direction: column-reverse;
  align-items: space-around;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;

  height: 52px;
  width: 500px;
  left: 10px;
  right: 16px;
  top: 302px;
`;

const StyledHeader = styled.header`
  bottom: -20%;
  width: 270px;
  height: 48px;
  left: 16px;
  top: 14px;

  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;

  color: #000000;
`;

const CoursesLogo = styled.img`
  width: 49px;
  height: 35px;
  left: 17px;
  top: 8px;
`;
