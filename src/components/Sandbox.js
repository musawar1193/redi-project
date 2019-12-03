import React from 'react'
import {Link} from "react-router-dom";

export const Sandbox =  (props) => {
        const {title, url, description} = props.details;
    return(
        <>
            <div>
                {title}
            </div>
            <br/>
            <div>
                {url}
            </div>
            <br/>
            <div>
                {description}
            </div>
        </>
    )
};

export default Sandbox;
