import React from 'react'
import {Link} from "react-router-dom";

export const Lesson =  ({lesson}) => {

    return(
        <>
            <Link to={`/course/${lesson.id}`}>{lesson.title}</Link>
            <br/>
        </>
    )
};

