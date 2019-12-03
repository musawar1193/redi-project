import React from 'react'
import {Link} from "react-router-dom";

export const Course =  ({course}) => {

    return(
        <>
            <Link to={`/course/${course.id}`} key={course.id}>{course.title}</Link>
            <br/>
        </>
    )
};

