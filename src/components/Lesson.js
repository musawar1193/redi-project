import React from "react"
import styled from "styled-components"

export const Lesson = ({name}) => {
  return <StyledDiv>{name}</StyledDiv>
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:500px
  height:100px
  background-color: #9e9e9e5c;
  margin: 20px;
  justify-content: center;
  :hover {
    background-color: #33aec8;
  }
  :focus {
    outline: none;
  }
  cursor: pointer;
`
export default Lesson
