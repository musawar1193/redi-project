import React from "react";
import styled from "styled-components";
import { StyledDiv } from "./pages/courses/CoursesStyle";

class User extends React.Component {
  render() {
    return (
      <StyledDiv>
        <StyledHeader>User</StyledHeader>
        <StyledInput
          name="user"
          type="text"
          onChange={this.handleSearch}
          placeholder="User name/ Email address"
        />
        <StyledInput
          name="password"
          type="password"
          onChange={this.handleSearch}
          placeholder="Create password"
        />
        <StyledInput
          name="repeatpassword"
          type="password"
          onChange={this.handleSearch}
          placeholder="Repeat password"
        />
        <StyledInputNext
          name="next"
          type="submit"
          //onChange={this.handleSearch}
          value="Next"
        />
      </StyledDiv>
    );
  }
}

export default User;

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

const StyledInput = styled.input`
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

const StyledInputNext = styled(StyledInput)`
  align-items: center;
`;
