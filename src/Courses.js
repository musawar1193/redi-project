import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import htmlcss from "./img/javascript.png";
import js from "./img/js.png";
import {StyledDiv, StyledHeader, CoursesLogo, StyledButton} from './pages/courses/CoursesStyle';

class Courses extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledHeader>Your Courses</StyledHeader>
        <StyledButton>
          <CoursesLogo src={htmlcss} />
          HTML & CSS
        </StyledButton>
        <StyledButton>
          <CoursesLogo src={js} />
          JavaScript
        </StyledButton>
        <StyledButton>
          <CoursesLogo src={logo} />
          React
        </StyledButton>
      </StyledDiv>
    );
  }
}

export default Courses;
