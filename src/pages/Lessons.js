import React from "react"
import styled from "styled-components"

import Lesson from "../components/Lesson"
import checked from "../images/checked.svg"
import cancel from "../images/cancel.svg"
import equal from "../images/equal.svg"

export const Lessons = () => {
  const handleFilterDone = () => {
    console.log("Filter Lessons that are done")
  }

  const handleFilterNotDone = () => {
    console.log("Filter Lessons that are not done")
  }

  const handleShowAllLessons = () => {
    console.log("Show all lessons")
  }
  return (
    <StyledMainDiv>
      <StyledH1>Your Lessons</StyledH1>
      <StyledInnerDiv>
        <StyledImage src={checked} onClick={handleFilterDone} />
        <StyledImage src={cancel} onClick={handleFilterNotDone} />
        <StyledImage src={equal} onClick={handleShowAllLessons} />
      </StyledInnerDiv>
      <Lesson name={"React: Intro"} />
      <Lesson name={"React: Components and Props"} />
      <Lesson name={"React: State, Lifecycle & Handling Events"} />
      <Lesson name={"React: Lists & Keys"} />
    </StyledMainDiv>
  )
}
const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledH1 = styled.h1`
  font-weight: bolder;
  color: black;
`
const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 50px;
  cursor: pointer;
`
const StyledInnerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 400px;
  justify-content: space-around;
`
export default Lessons
