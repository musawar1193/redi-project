import React from 'react'
import {Link} from "react-router-dom";
import {StyledDiv} from './LessonStyle';

export const Lesson =  ({lesson,course_id}) => {

    return(
        <>
            <Link to={`/course/${course_id}/${lesson.id}`} key={lesson.id}>
                <StyledDiv>
                    {lesson.title}
                </StyledDiv>
            </Link>
            <br/>
        </>
    )
};
