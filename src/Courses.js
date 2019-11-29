import React from 'react';
import styled from "styled-components";

class Courses extends React.Component {
  

render() {
  return (
    
<div>
  <StyledHeader>Your Courses</StyledHeader>
  <StyledButton as="a" href="/"><CoursesLogo src="https://s3-alpha-sig.figma.com/img/f729/41b0/e07045ae583b1f5bfeae27d0f38fba3d?Expires=1575849600&Signature=AXiBoGYRgcgPT5XCyrHkA7Fm17tJKY5E9VCWc3PpBwxkiRrS8x2a67zuALPy430wMHDKoh6vs-ActuXbWVqoLSc0~FwBcKtcbTfhCdyv8oOBqWPia9ppG9U0GiOd8zbpi7ZqOjjCRoZ0np4sGmgKXz14ruXZkqdmDDka954p8UFl59QlJJdeRFVB0j~nVZX0dY17~j14BIP6lWnZgakW4NqHZ~f7SdolT3RPA49njnTYFnJIIrJZ3XD0-~LvOZXOjtt3dLUM9WBz1Gu5wG6b9k8~viD~FaDDfgP8USxqAPgD6tkUSpc3fRYPDgz7AEtwfTh29mYzm68~blIcfFGVHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="App-logo" alt="logo" />HTML & CSS</StyledButton>
  <StyledButton as="a" href="/"><CoursesLogo src="https://s3-alpha-sig.figma.com/img/2818/f942/74601cc1884f40f958704bf7a1cf2d55?Expires=1575849600&Signature=H6pUOUWFH5P5Gd9G8INTtUM40~21WRq7LprF9xUjnQ7QN2bTQpKrmEE~mpy8Jh-zc1uE6nJCQ0CorB0cfF1q44LeUMckA9Fh9Dv8BRWOKzAjxDb3WlEbh45QhCeme28klq6vOxlfhVhsbleV1R~INFkvyXq8DLurw-w5yXJxFCBl1KrzB8Vd7fCRlVmbPZrJgQYuciUWo4nX1aqQu-XyXETbhSVBxn1sUjoU9wsCC2I7vJ3wIrkZjdrkpF8NKNQKI5e~JkvlY6~DpW9HpRK988rkpEhN-BuZ3Ggqw4EIlsdyq-0FuZqxo8RaHVXcyS6K5e7vdwc9NStBKALAZS79sA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="App-logo" alt="logo"/>JavaScript</StyledButton>
  <StyledButton as="a" href="/"><CoursesLogo src="https://s3-alpha-sig.figma.com/img/1d55/e74d/32c1e4293310cacf9f24675eb643de23?Expires=1575849600&Signature=fcHx1Vlj9d4cHmZBbE6fd~zkZUDWrjpGGU1tUyQzsEu2QROVEUnBvH1umewh2rRnnK9x06lzqhkx3ldpb9QfaQ1Ao1BtSYhmbmXDrNm~kbjnglNQsNK5~FfFQGU46i3uRKMird-Lfu4PiZlp1cAX1ZhFGg5QMjgCFHRVDbQNQCY4G00dx33sRqKeym69fLnka0O~A5pGd~oyVJ9YsLbl4HIy0HKEA8nFTfw7ePHIT1N1voLme5X3Nmg1kJYl1o~OsFHCW3o3T~yGzA5WZkKF9~jQ2s9zYL8XD3J7WFxmh5zd0BnVxGDmUMeFows1C~k8SnQvSS~5NaoCWNXOPbKqSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className="App-logo" alt="logo" />React</StyledButton>

</div>
)
 }
  }

export default Courses;

const StyledButton = styled.button`
display: block;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;


position: absolute;
height: 52px;
left: 10px;
right: 16px;
top: 302px;

`;

const StyledHeader = styled.header`
position: absolute;

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
position: absolute;
width: 49px;
height: 35px;
left: 17px;
top: 8px;
`;