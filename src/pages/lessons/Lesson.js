import React from 'react'
import {Link} from "react-router-dom";

export const Lesson =  ({lesson,course_id}) => {

    return(
        <>
            <Link to={`/course/${course_id}/${lesson.id}`} key={lesson.id}>{lesson.title}</Link>
            <br/>
        </>
    )
};

