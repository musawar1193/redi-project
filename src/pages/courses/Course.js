import React from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../../logo.svg";
//import htmlcss from "../../img/htmlcss.png";
import {StyledDiv, StyledHeader, CoursesLogo, StyledButton} from './CoursesStyle';

import javascript from "../../img/javascript.png";

export const Course =  ({course}) => {
console.log(javascript);
    return(
        <>
            <Link to={`/course/${course.id}`} key={course.id}>

                <StyledButton>
                    <CoursesLogo src={javascript} />
                    {course.title}
                </StyledButton>
            </Link>
            <br/>
        </>
    )
};


