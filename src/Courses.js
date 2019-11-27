import React from 'react';
import styled from "styled-components";

class Courses extends React.Component {
  

render() {
  return (
<div>
  <StyledButton>Normal Button</StyledButton>
  <StyledButton as="a" href="/">Link with Button styles</StyledButton>
  <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>

</div>
)
 }
  }

export default Courses;

const StyledButton = styled.button`
display: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
`;
const TomatoButton = styled(StyledButton)`
color: tomato;
border-color: tomato;
`;