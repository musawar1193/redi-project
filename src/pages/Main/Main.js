import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Main extends Component {

    render() {
        return (
            <div>
                <Link to='/courses'>Courses</Link>
            </div>
        )
    }
}
export default Main;
